import { JSX } from "react";
import { FaCheck } from "react-icons/fa6";

interface ButtonProps {
  text?: string;
  type: "submit" | "reset" | "button";
  icon?: JSX.Element;
  customStyle?: string;
  check?: boolean;
  onClick?: () => void;
}
const Button = ({
  text,
  type,
  icon,
  customStyle,
  check,
  onClick,
}: ButtonProps) => {
  return (
    <button type={type} className={`btn ${customStyle}`} onClick={onClick}>
      {icon && icon}
      <span className="">{text}</span>
      {check && (
        <span className="ml-auto">
          <FaCheck className="icon-size" />
        </span>
      )}
    </button>
  );
};

export default Button;
