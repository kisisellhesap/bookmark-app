import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";
import ForgotPasswordForm from "./forgot-password-form";
import ResetPasswordForm from "./reset-password-form";

interface FormWrapperProps {
  type: "sign-in" | "sign-up" | "forgot-password" | "reset-password";
}
const FormWrapper = ({ type }: FormWrapperProps) => {
  switch (type) {
    case "sign-in":
      return <SignInForm />;
    case "sign-up":
      return <SignUpForm />;
    case "forgot-password":
      return <ForgotPasswordForm />;
    case "reset-password":
      return <ResetPasswordForm />;
  }
};

export default FormWrapper;
