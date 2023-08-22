import clsx from "clsx";
import styles from "./styles.module.scss";

const AnimatedBackground: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(styles.animationItem, styles.animationItemTop)}></div>
      <div
        className={clsx(
          styles.animationItem,
          styles.animationItemBottom
        )}></div>
      <div
        className={clsx(styles.animationItem, styles.animationItemLeft)}></div>
      <div
        className={clsx(styles.animationItem, styles.animationItemRight)}></div>
    </div>
  );
};

export default AnimatedBackground;
