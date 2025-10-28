import { JSX } from "react";
import { ThemeToggle } from "./ThemeToggle";
interface ButtonProps {
  text: string;
  type: "submit" | "reset" | "button";
  icon?: JSX.Element;
  customStyle?: string;
  onClick?: () => void;
}
const Button = ({ text, type, icon, customStyle, onClick }: ButtonProps) => {
  return (
    <button type={type} className={`btn ${customStyle}`} onClick={onClick}>
      {icon && icon}
      <span className="">{text}</span>
    </button>
  );
};

export default Button;
