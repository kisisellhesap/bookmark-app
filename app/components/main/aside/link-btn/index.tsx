"use client";
import { AsideLink } from "@/app/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkBtnProps {
  link: AsideLink;
}

const LinkBtn = ({ link }: LinkBtnProps) => {
  const pathname = usePathname();
  const isActive = pathname === link.link;

  return (
    <Link
      href={link.link}
      className={`flex items-center gap-2 p-3  radius-6 hover:bg-Neutral-100 hover:text-Neutral-900 dark:hover:bg-Neutral-600-d dark:hover:text-Neutral-0-d ${
        isActive
          ? "bg-Neutral-100 text-Neutral-900 dark:bg-Neutral-600-d dark:text-Neutral-0-d"
          : " text-Neutral-800 dark:text-Neutral-100-d"
      }   `}
    >
      <button>{link.icon}</button>
      <span className="text-preset-3">{link.text}</span>
    </Link>
  );
};

export default LinkBtn;
