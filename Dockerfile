# ============================================
# MULTI-STAGE DOCKER BUILD
# Think of this like 3 assembly lines. Each stage does one job,
# and only the final stage ships. This keeps the final image tiny.
# ============================================

# --- Stage 1: Install dependencies ---
# Starts with a small Node 20 image (Alpine Linux = ~50MB vs ~350MB full)
FROM node:20-alpine AS deps
WORKDIR /app

# Copy only package files first. Docker caches this layer, so
# dependencies won't re-install unless package.json changes.
COPY package.json package-lock.json ./
RUN npm ci --production=false

# --- Stage 2: Build the Next.js app ---
FROM node:20-alpine AS builder
WORKDIR /app

# Bring in node_modules from Stage 1
COPY --from=deps /app/node_modules ./node_modules

# Copy all source code and build
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- Stage 3: Production runner (this is what actually ships) ---
# Fresh image — no build tools, no dev dependencies, no source code.
# Only the compiled app + static files. ~120MB total.
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Run as non-root user (security best practice)
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only what's needed to run:
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Railway sets PORT automatically; default to 3000
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check — Railway and other hosts use this to know the app is alive
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

# Start the standalone Next.js server
CMD ["node", "server.js"]
