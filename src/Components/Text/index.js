import styles from "./styles.module.scss";

export default function Text({
  children,
  color = "#414141",
  fontSize = 16,
  fontWeight = 400,
  alignItems,
  fontStyle = "normal",
  textDecoration = "none",
  textTransform = "lowercase"
}) {
  return (
    <div
      className={styles.container}
      style={{
        color,
        fontSize,
        fontWeight,
        alignItems,
        fontStyle,
        textDecoration,
        textTransform,
      }}
    >
      {children}
    </div>
  );
}
