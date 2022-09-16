import styles from "./styles.module.scss";

export default function Button({
  children,
  backgroundColor = "#FFFFFF",
  color = "#FFFFFF",
  borderRadius,
  padding,
  fontSize,
  fontWeight = "bold",
  onClick,
  ...rest
}) {
  return (
    <button
      {...rest}
      className={styles.container}
      style={{
        backgroundColor,
        borderRadius,
        padding,
        fontSize,
        fontWeight,
        color,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
