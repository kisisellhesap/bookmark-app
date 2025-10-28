import { JSX } from "react";
interface DropdownBtnProps {
  text: string;
  type: "submit" | "reset" | "button";
  icon?: JSX.Element;
  variant?: string;
  onClick?: () => void;
}
const DropdownBtn = ({
  text,
  type,
  icon,
  variant,
  onClick,
}: DropdownBtnProps) => {
  return <div>DropdownBtn</div>;
};

export default DropdownBtn;
