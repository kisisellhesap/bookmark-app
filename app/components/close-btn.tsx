"use client";
import { JSX } from "react";
interface OpenCloseBtnProps {
  icon: JSX.Element;
  onClick?: () => void;
  responsive?: string;
}
const CloseBtn = ({ icon, onClick, responsive }: OpenCloseBtnProps) => {
  return (
    <button
      className={`flex items-center justify-center p-1 radius-8 cursor-pointer text-Neutral-900 dark:text-Neutral-0-d ${
        responsive && responsive
      }`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
export default CloseBtn;
