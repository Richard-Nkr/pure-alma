type BlobProps = {
  className?: string;
  color?: string;
  animate?: boolean;
};

export default function Blob({
  className = "",
  color = "var(--color-amla-yellow)",
  animate = true,
}: BlobProps) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute block ${animate ? "animate-blob" : ""} ${className}`}
      style={{
        backgroundColor: color,
        borderRadius: "42% 58% 63% 37% / 42% 44% 56% 58%",
      }}
    />
  );
}
