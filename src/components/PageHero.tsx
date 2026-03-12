import Image from "next/image";

interface PageHeroProps {
  image: string;
  imageAlt: string;
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  compact?: boolean;
}

export default function PageHero({
  image,
  imageAlt,
  label,
  title,
  subtitle,
  centered = true,
  compact = false,
}: PageHeroProps) {
  return (
    <section className={`relative ${compact ? "h-[50vh] min-h-[380px]" : "h-[60vh] min-h-[480px]"} w-full overflow-hidden`}>
      {/* Background image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Multi-layer overlay */}
      <div className={centered ? "hero-overlay-center" : "hero-overlay"} />

      {/* Content */}
      <div className={`relative z-10 h-full flex items-center ${centered ? "justify-center text-center" : ""}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${centered ? "" : "max-w-2xl"}`}>
          {label && (
            <span className="inline-block text-[11px] font-sans font-semibold uppercase tracking-[0.15em] text-purple-accent mb-4">
              {label}
            </span>
          )}
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {title}
          </h1>
          {subtitle && (
            <p className={`text-base sm:text-lg text-brand-gray-light leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] ${centered ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
