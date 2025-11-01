"use client";

import { SignInTypeForm } from "@/app/types";
import Form from "../../form";
import FormBtn from "../form-component/form-btn";
import FormHeader from "../form-component/form-header";
import FormInput from "../form-component/form-input";
import FormLinkText from "../form-component/form-link-text";
import FormPasswordInput from "../form-component/form-password-input";
import { ChangeEvent, FormEvent, useState } from "react";
import { signInMethod } from "@/app/firebase/allMethod";

const SignInForm = () => {
  const initialStateForm: SignInTypeForm = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState<SignInTypeForm>(initialStateForm);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    if (value !== "") {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInMethod(form);
  };
  return (
    <Form>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <FormHeader
          title=" Log in to your account"
          description="Welcome back! Please enter your details."
        />
        <div className="flex flex-col gap-4">
          <FormInput
            label="Email"
            name="email"
            type="email"
            onChange={(e) => handleChange(e)}
          />
          <FormPasswordInput
            label="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <FormBtn type="submit" text="Login" />

        <div className="flex flex-col items-center gap-3">
          <FormLinkText
            text="Forgot password?"
            link="Reset it"
            url={"/forgot-password"}
          />
          <FormLinkText
            text="Don’t have an account?"
            link="Sign up"
            url={"/sign-up"}
          />
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
