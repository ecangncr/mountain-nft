import clsx from "clsx";
import styles from "./styles.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ ...props }) => {
  return <input {...props} className={clsx(styles.input, props.className)} />;
};

export default Input;
