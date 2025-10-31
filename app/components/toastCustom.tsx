"use client";
import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";

const ToastCustom = () => {
  const { theme } = useTheme();
  return (
    <Toaster
      position="bottom-right"
      gutter={8}
      // containerStyle={{
      //   zIndex: 10, // default ~9999 civarındadır, düşür
      // }}
      toastOptions={{
        duration: 5000,
        removeDelay: 1000,

        success: {
          className:
            theme === "light"
              ? "toast toast-success-light text-preset-medium-4"
              : "toast toast-success-dark text-preset-medium-4",

          iconTheme: {
            primary: theme === "light" ? "#004241" : "#fff",
            secondary: theme === "light" ? "#fff" : "#004241",
          },
        },
        error: {},
      }}
    />
  );
};

export default ToastCustom;
