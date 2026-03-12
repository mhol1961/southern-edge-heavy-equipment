interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block font-sans font-semibold text-[11px] uppercase tracking-[0.15em] text-purple-accent mb-4 ${className}`}
    >
      {text}
    </span>
  );
}
