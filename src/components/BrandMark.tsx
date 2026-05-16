type BrandMarkProps = {
  className?: string;
  /** When true, render light-on-dark variant (footer / dark backgrounds). */
  inverted?: boolean;
  title?: string;
};

/**
 * Inline SVG wordmark — replaces the 812 KB header-logo.png that previously
 * shipped on every route. Tiny, crisp at any size, and inherits currentColor.
 */
export default function BrandMark({
  className,
  inverted = false,
  title = "Ageless Living",
}: BrandMarkProps) {
  const fg = inverted ? "currentColor" : "currentColor";
  return (
    <svg
      role="img"
      aria-label={`${title} — Longevity & Vitality Clinic`}
      viewBox="0 0 220 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {/* Leaf-arc monogram — references vitality / growth without leaning floral */}
      <g fill="none" stroke={fg} strokeWidth="1.5" strokeLinecap="round">
        <path d="M6 22 C 6 10, 14 4, 24 4 C 24 16, 16 22, 6 22 Z" />
        <path d="M6 22 C 12 18, 18 14, 24 6" opacity="0.55" />
      </g>
      {/* Wordmark */}
      <text
        x="36"
        y="22"
        fill={fg}
        fontFamily="Jost, system-ui, sans-serif"
        fontSize="18"
        fontWeight="500"
        letterSpacing="0.4"
      >
        Ageless Living
      </text>
      <text
        x="36"
        y="30"
        fill={fg}
        fontFamily="Jost, system-ui, sans-serif"
        fontSize="6"
        fontWeight="600"
        letterSpacing="2.2"
        opacity="0.65"
      >
        LONGEVITY · VITALITY
      </text>
    </svg>
  );
}
