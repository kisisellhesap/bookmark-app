"use client";
import Aside from "@/app/components/main/aside";
import Header from "@/app/components/main/header";
import Modal from "@/app/components/main/modal";
import { useModal } from "@/app/context/ModalContext";
import { useUser } from "@/app/context/UserContext";
import { LayoutProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Layout = ({ children }: LayoutProps) => {
  const { isActive } = useModal();
  const router = useRouter();
  const { user, loading } = useUser();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/sign-in");
    }
  }, [user, loading]);

  if (loading) return null;
  return (
    <div className="flex bg-Neutral-100 dark:bg-Neutral-900-d min-h-screen">
      <Aside />
      <div className="flex-1">
        <Header />
        {children}
        {isActive && <Modal />}
      </div>
    </div>
  );
};

export default Layout;
