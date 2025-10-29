import { ChangeEvent } from "react";

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormInput = ({ label, type, name, onChange }: FormInputProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-preset-4 text-Neutral-900 dark:text-Neutral-0-d">
        {label}
      </label>

      {label === "Description *" ? (
        <div className="flex flex-col  gap-1">
          <textarea
            className="bg-Neutral-0 outline-Neutral-900 border-Neutral-900  dark:bg-Neutral-600-d dark:outline-Neutral-300-d dark:border-Neutral-300-d border radius-8 p-3 resize-none min-h-[117px]"
            required
            maxLength={280}
            name={name}
            onChange={onChange}
          />
          <span className="text-Neutral-800 dark:text-Neutral-100-d text-preset-5 self-end">
            0/280
          </span>
        </div>
      ) : (
        <input
          type={type}
          className="bg-Neutral-0 outline-Neutral-900 border-Neutral-900  dark:bg-Neutral-600-d dark:outline-Neutral-300-d dark:border-Neutral-300-d border radius-8 p-3 "
          required
          name={name}
          onChange={onChange}
        />
      )}
    </div>
  );
};
export default FormInput;
