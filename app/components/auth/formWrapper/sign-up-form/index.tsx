"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Form from "../../form";
import FormBtn from "../form-component/form-btn";
import FormHeader from "../form-component/form-header";
import FormInput from "../form-component/form-input";
import FormLinkText from "../form-component/form-link-text";
import FormPasswordInput from "../form-component/form-password-input";
import { SignUpTypeForm } from "@/app/types";
import { signUpMethod } from "@/app/firebase/allMethod";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const initialStateForm: SignUpTypeForm = {
    fullname: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState<SignUpTypeForm>(initialStateForm);

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
    signUpMethod(form);
  };

  return (
    <Form>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <FormHeader
          title="Create your account"
          description="Join us and start saving your favorite links — organized, searchable, and always within reach."
        />
        <div className="flex flex-col gap-4">
          <FormInput
            label="Full name *"
            type="text"
            name="fullname"
            onChange={(e) => handleChange(e)}
            value={form.fullname}
          />

          <FormInput
            label="Email * "
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            value={form.email}
          />
          <FormPasswordInput
            label="Password *"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <FormBtn type="submit" text="Create account" />

        <div className="flex flex-col items-center gap-3">
          <FormLinkText
            text="Already have an account?"
            link="Log in"
            url={"/sign-in"}
          />
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
