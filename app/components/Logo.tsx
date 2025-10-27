"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Logo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-[214px] h-8 invisible">loading</div>;
  const image =
    theme === "dark"
      ? "./images/logo-dark-theme.svg"
      : "./images/logo-light-theme.svg";
  return (
    <Image
      src={image}
      alt={`${theme === "dark" ? "dark-logo" : "light-logo"}`}
      width={214}
      height={32}
    />
  );
};

export default Logo;
