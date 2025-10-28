"use client";
import { LayoutProps } from "@/app/types";
import Logo from "../Logo";
import { motion } from "framer-motion";

const Form = ({ children }: LayoutProps) => {
  return (
    <motion.form
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className=" max-w-md w-full bg-Neutral-0 dark:bg-Neutral-800-d px-8 py-10 flex flex-col gap-8 radius-12 shadow-2"
    >
      <Logo />

      {children}
    </motion.form>
  );
};

export default Form;
