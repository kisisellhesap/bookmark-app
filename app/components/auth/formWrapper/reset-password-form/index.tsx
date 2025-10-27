import Form from "../../form";
import FormBtn from "../form-component/form-btn";
import FormHeader from "../form-component/form-header";
import FormLinkText from "../form-component/form-link-text";
import FormPasswordInput from "../form-component/form-password-input";

const ResetPasswordForm = () => {
  return (
    <Form>
      <FormHeader
        title="Reset Your Password"
        description="Enter your new password below. Make sure it’s strong and secure."
      />
      <div className="flex flex-col gap-4">
        <FormPasswordInput label="New Password *" />
        <FormPasswordInput label="Confirm Password *" />
      </div>

      <FormBtn type="submit" text="Reset Password" />

      <div className="flex flex-col items-center gap-3">
        <FormLinkText link="Back to login" url={"/sign-in"} />
      </div>
    </Form>
  );
};

export default ResetPasswordForm;
