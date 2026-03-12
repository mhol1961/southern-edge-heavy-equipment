import Link from "next/link";

interface QuoteButtonProps {
  text?: string;
  href?: string;
  className?: string;
  size?: "default" | "lg";
}

export default function QuoteButton({
  text = "Get a Quote",
  href = "/contact",
  className = "",
  size = "default",
}: QuoteButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center font-heading font-bold uppercase tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark hover:from-purple-light hover:to-purple transition-all duration-300 hover:shadow-[0_0_24px_rgba(123,45,142,0.4)] ${
        size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
      } ${className}`}
    >
      {text}
    </Link>
  );
}
