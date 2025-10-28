"use client";
import { IoSunnyOutline } from "react-icons/io5";
import { AiOutlineMoon } from "react-icons/ai";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=" w-16 h-[30px] radius-4 ml-auto relative flex items-center justify-center gap-4  bg-Neutral-300 dark:bg-Neutral-500-d  before:absolute before:w-[30px] before:h-[26px] before:bg-Neutral-0 before:top-0.5 before:left-0.5 before:rounded-sm cursor-pointer dark:before:bg-Neutral-600-d dark:before:left-8 "
    >
      <IoSunnyOutline className="w-3.5 h-3.5  text-Neutral-900 dark:text-Neutral-0-d z-10" />
      <AiOutlineMoon className="w-3.5 h-3.5  text-Neutral-900 dark:text-Neutral-0-d z-10" />

      {/* {theme === "dark" ? "🌙 Dark" : "☀️ Light"} */}
    </button>
  );
}
