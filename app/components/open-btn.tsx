"use client";
import { JSX } from "react";
interface OpenBtnProps {
  icon: JSX.Element;
  onClick?: () => void;
  responsive?: string;
}
const OpenBtn = ({ icon, onClick, responsive }: OpenBtnProps) => {
  return (
    <button
      className={`flex items-center justify-center  radius-8  border border-Neutral-400 dark:border-Neutral-400-d bg-Neutral-0 dark:bg-Neutral-800-d text-Neutral-900 dark:text-Neutral-0-d hover:bg-Neutral-100 dark:hover:bg-Neutral-500-d cursor-pointer  ${
        responsive && responsive
      }`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
export default OpenBtn;
