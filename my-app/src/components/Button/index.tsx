import { FC } from "react";
import styles from "@/components/Button/Button.module.css";
interface IButtonProps {
  text: string;
  width?: string;
  text_color?: string;
  type?: "green" | "white" | "transparent";
  max_width?: string;
}

const Button: FC<IButtonProps> = ({ text, width, type, max_width, text_color }) => {
  return (
    <div
      className={`${styles.button} 
      ${type === "green" ? styles.green_button : ""} 
      ${type === "transparent" ? styles.transparent_button : ""}`}
      style={{ width: width, maxWidth: max_width }}
    >
      <p className={`${styles.button_text} ${text_color === "black" && styles.button_text_black}`}>{text}</p>

    </div>
  );
};

export default Button;
