import { JSX } from "react";
interface ButtonProps {
  text: string;
  type: "submit" | "reset" | "button";
  icon?: JSX.Element;
  customStyle?: string | undefined;
}
const Button = ({ text, type, icon, customStyle }: ButtonProps) => {
  return (
    <button type={type} className={`btns`}>
      {icon}
      <span>{text} </span>
    </button>
  );
};

export default Button;
