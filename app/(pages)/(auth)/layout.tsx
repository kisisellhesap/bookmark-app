"use client";
import { useUser } from "@/app/context/UserContext";
import { LayoutProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { user, loading } = useUser();

  useEffect(() => {
    if (!loading && user) {
      router.push("/home");
    }
  }, [user, loading]);

  if (loading && !user) return null;

  return (
    <div className="min-h-screen grid place-items-center p-5">{children}</div>
  );
};

export default Layout;
