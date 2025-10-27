import Form from "../../form";
import FormBtn from "../form-component/form-btn";
import FormHeader from "../form-component/form-header";
import FormInput from "../form-component/form-input";
import FormLinkText from "../form-component/form-link-text";
import FormPasswordInput from "../form-component/form-password-input";

const SignInForm = () => {
  return (
    <Form>
      <FormHeader
        title=" Log in to your account"
        description="Welcome back! Please enter your details."
      />
      <div className="flex flex-col gap-4">
        <FormInput label="Email" type="email" />
        <FormPasswordInput label="Password" />
      </div>

      <FormBtn type="submit" text="Login" />

      <div className="flex flex-col items-center gap-3">
        <FormLinkText
          text="Forgot password?"
          link="Reset it"
          url={"/reset-password"}
        />
        <FormLinkText
          text="Don’t have an account?"
          link="Sign up"
          url={"/sign-up"}
        />
      </div>
    </Form>
  );
};

export default SignInForm;
