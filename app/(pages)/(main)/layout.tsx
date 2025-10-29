import Aside from "@/app/components/main/aside";
import Header from "@/app/components/main/header";
import { LayoutProps } from "@/app/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex bg-Neutral-100 dark:bg-Neutral-900-d min-h-screen">
      <Aside />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
