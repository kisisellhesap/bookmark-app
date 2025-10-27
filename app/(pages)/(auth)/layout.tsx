import { LayoutProps } from "@/app/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen grid place-items-center p-5">{children}</div>
  );
};

export default Layout;
