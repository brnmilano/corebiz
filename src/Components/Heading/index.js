export default function Heading({
  children,
  color = "#000000",
  fontSize = 44,
  fontWeight = 600,
  alignItems,
}) {
  return (
    <h1
      style={{
        color,
        fontSize,
        fontWeight,
        alignItems,
      }}
    >
      {children}
    </h1>
  );
}
