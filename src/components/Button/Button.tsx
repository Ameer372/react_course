import styles from "./Button.module.css";
// button props
interface ButtonProps {
  children: string;
  color?: "primary";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button
      className={[styles.buttonStyle, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
