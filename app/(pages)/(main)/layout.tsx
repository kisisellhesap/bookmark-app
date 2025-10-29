"use client";
import Aside from "@/app/components/main/aside";
import Header from "@/app/components/main/header";
import Modal from "@/app/components/main/modal";
import { useModal } from "@/app/context/ModalContext";
import { LayoutProps } from "@/app/types";

const Layout = ({ children }: LayoutProps) => {
  const { isActive } = useModal();
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
