import Form from "../../form";
import FormBtn from "../form-component/form-btn";
import FormHeader from "../form-component/form-header";
import FormInput from "../form-component/form-input";
import FormLinkText from "../form-component/form-link-text";

const ForgetPasswordForm = () => {
  return (
    <Form>
      <FormHeader
        title="Forgot your password?"
        description="Enter your email address below and we’ll send you a link to reset your password."
      />
      <div className="flex flex-col gap-4">
        <FormInput label="Email * " type="email" />
      </div>

      <FormBtn type="submit" text="Send reset link" />

      <div className="flex flex-col items-center gap-3">
        <FormLinkText link="Back to login" url={"/sign-in"} />
      </div>
    </Form>
  );
};

export default ForgetPasswordForm;
