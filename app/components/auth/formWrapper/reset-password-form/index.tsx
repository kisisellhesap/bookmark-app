"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "../../form";
import FormBtn from "../form-component/form-btn";
import FormHeader from "../form-component/form-header";
import FormLinkText from "../form-component/form-link-text";
import FormPasswordInput from "../form-component/form-password-input";
import { ChangeEvent, FormEvent, useState } from "react";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "@/app/firebase";
import toast from "react-hot-toast";

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const oobCode = searchParams.get("oobCode");
  const [newPassword, setNewPassword] = useState("");
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!oobCode) return alert("Kod bulunamadı!");

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      toast.success("your password has been reset");
      router.push("/sign-in");
    } catch (err) {
      toast.error((err as any).message);
    }
  };

  return (
    <Form>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <FormHeader
          title="Reset Your Password"
          description="Enter your new password below. Make sure it’s strong and secure."
        />
        <div className="flex flex-col gap-4">
          <FormPasswordInput
            label="New Password *"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <FormBtn type="submit" text="Reset Password" />

        <div className="flex flex-col items-center gap-3">
          <FormLinkText link="Back to login" url={"/sign-in"} />
        </div>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
