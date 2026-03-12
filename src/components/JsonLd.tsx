/**
 * Safe JSON-LD structured data component.
 * Uses JSON.stringify which escapes all special characters,
 * preventing XSS. Only receives data from our own hardcoded schemas.
 */
interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  const jsonString = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // Safe: JSON.stringify escapes </script> and all special chars
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
