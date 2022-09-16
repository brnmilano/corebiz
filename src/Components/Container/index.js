import clsx from 'clsx';
import styles from './styles.module.scss';

/**
 * Define um max-width padrão, alinhando o componente no centro.
 */
 export default function Container ({
  children,
  className,
  maxWidth = '1200px',
  style = {},
  overflowHidden = true,
}) {
  const classes = clsx(styles.containerContainer, className, overflowHidden && styles.overflowHidden);

  return (
    <div
      className={classes}
      style={{
        maxWidth,
        ...style,
      }}
    >
      {children}
    </div>
  );
};