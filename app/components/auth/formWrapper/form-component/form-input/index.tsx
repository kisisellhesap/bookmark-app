interface FormInputProps {
  label: string;
  type: string;
}

const FormInput = ({ label, type }: FormInputProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-preset-4 text-Neutral-900 dark:text-Neutral-0-d">
        {label}
      </label>
      <input
        type={type}
        className="bg-Neutral-0 outline-Neutral-900 border-Neutral-900  dark:bg-Neutral-600-d dark:outline-Neutral-300-d dark:border-Neutral-300-d border radius-8 p-3 "
        required
      />
    </div>
  );
};
export default FormInput;
