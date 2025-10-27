import Form from "../../form";
import FormBtn from "../form-component/form-btn";
import FormHeader from "../form-component/form-header";
import FormInput from "../form-component/form-input";
import FormLinkText from "../form-component/form-link-text";
import FormPasswordInput from "../form-component/form-password-input";

const SignUpForm = () => {
  return (
    <Form>
      <FormHeader
        title="Create your account"
        description="Join us and start saving your favorite links — organized, searchable, and always within reach."
      />
      <div className="flex flex-col gap-4">
        <FormInput label="Full name *" type="text" />

        <FormInput label="Email * " type="email" />
        <FormPasswordInput label="Password *" />
      </div>

      <FormBtn type="submit" text="Create account" />

      <div className="flex flex-col items-center gap-3">
        <FormLinkText
          text="Already have an account?"
          link="Log in"
          url={"/sign-in"}
        />
      </div>
    </Form>
  );
};

export default SignUpForm;
