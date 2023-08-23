import clsx from "clsx";
import styles from "./styles.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button {...props} className={clsx(styles.button, props.className)}>
      {children}
    </button>
  );
};

export default Button;
