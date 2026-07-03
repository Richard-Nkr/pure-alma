type AmlouJarProps = {
  className?: string;
  lidColor?: string;
  labelText?: string;
};

export default function AmlouJar({
  className,
  lidColor = "#3a2a1e",
  labelText = "PURE ALMA",
}: AmlouJarProps) {
  return (
    <svg
      viewBox="0 0 220 300"
      className={className}
      role="img"
      aria-label="Pot d'amlou Pure Alma"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7edda" />
          <stop offset="1" stopColor="#e6d3b3" />
        </linearGradient>
        <linearGradient id="paste" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c98a3c" />
          <stop offset="1" stopColor="#9c5f24" />
        </linearGradient>
      </defs>

      {/* jar body */}
      <rect x="35" y="70" width="150" height="200" rx="26" fill="url(#glass)" />
      {/* amlou paste inside */}
      <path
        d="M45 150 Q110 130 175 150 V244 a16 16 0 0 1 -16 16 H61 a16 16 0 0 1 -16 -16 Z"
        fill="url(#paste)"
      />
      {/* highlight */}
      <rect x="48" y="86" width="16" height="150" rx="8" fill="#ffffff" opacity="0.35" />

      {/* label */}
      <rect x="55" y="168" width="110" height="66" rx="8" fill="#fbf5ea" opacity="0.95" />
      <text
        x="110"
        y="196"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="17"
        fontWeight="700"
        fill="#3a2a1e"
        letterSpacing="1"
      >
        {labelText}
      </text>
      <text
        x="110"
        y="216"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="9"
        fill="#b0532f"
        letterSpacing="2"
      >
        AMLOU · ARGAN
      </text>

      {/* neck */}
      <rect x="60" y="52" width="100" height="26" rx="6" fill="url(#glass)" />
      {/* lid */}
      <rect x="52" y="26" width="116" height="34" rx="12" fill={lidColor} />
      <rect x="52" y="26" width="116" height="10" rx="5" fill="#000000" opacity="0.15" />
    </svg>
  );
}
