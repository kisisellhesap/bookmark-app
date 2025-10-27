import React from "react";

interface FormHeaderProps {
  title: string;
  description: string;
}
const FormHeader = ({ title, description }: FormHeaderProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <h3 className="text-preset-1 text-Neutral-900 dark:text-Neutral-0-d">
        {title}
      </h3>
      <p className="text-preset-4-medium text-Neutral-800 dark:text-Neutral-100-d">
        {description}
      </p>
    </div>
  );
};

export default FormHeader;
