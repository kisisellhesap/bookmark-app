"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Form from "../../form";
import FormBtn from "../form-component/form-btn";
import FormHeader from "../form-component/form-header";
import FormInput from "../form-component/form-input";
import FormLinkText from "../form-component/form-link-text";
import { passwordResetEmailMethod } from "@/app/firebase/allMethod";
import toast from "react-hot-toast";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    passwordResetEmailMethod(email);
  };

  return (
    <Form>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <FormHeader
          title="Forgot your password?"
          description="Enter your email address below and we’ll send you a link to reset your password."
        />
        <div className="flex flex-col gap-4">
          <FormInput
            label="Email * "
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            value={email || ""}
          />
        </div>

        <FormBtn type="submit" text="Send reset link" />

        <div className="flex flex-col items-center gap-3">
          <FormLinkText link="Back to login" url={"/sign-in"} />
        </div>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
