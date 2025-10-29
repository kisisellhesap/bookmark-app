"use client";
import { ChangeEvent, useState } from "react";
import { FaMehRollingEyes } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";

interface FormPasswordInputProps {
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
const FormPasswordInput = ({
  label,
  name,
  onChange,
}: FormPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-1.5 relative">
      <label className="text-preset-4 text-Neutral-900 dark:text-Neutral-0-d">
        {label}
      </label>

      <input
        type={showPassword ? "text" : "password"}
        className="bg-Neutral-0 outline-Neutral-900 border-Neutral-900  dark:bg-Neutral-600-d dark:outline-Neutral-300-d dark:border-Neutral-300-d border radius-8 p-3 flex-1 "
        required
        minLength={6}
        maxLength={15}
        name={name}
        onChange={onChange}
      />

      <button
        className="absolute right-3 top-10 cursor-pointer outline-0 text-2xl"
        type="button"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? <BsFillEmojiHeartEyesFill /> : <FaMehRollingEyes />}
      </button>
    </div>
  );
};

export default FormPasswordInput;
