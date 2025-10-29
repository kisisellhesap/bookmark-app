"use client";
import { useAside } from "@/app/context/AsideContext";
import RightContent from "./right-content";
import SearchContent from "./search-content";
import { RxHamburgerMenu } from "react-icons/rx";
import OpenBtn from "../../open-btn";

const Header = () => {
  const { setAsideIsActive } = useAside();

  return (
    <header className=" sticky top-0 shadow-1  z-10 px-8 py-4  bg-Neutral-0 dark:bg-Neutral-800-d flex items-center gap-5">
      <OpenBtn
        icon={<RxHamburgerMenu className="icon-size" />}
        onClick={() => setAsideIsActive(true)}
        responsive="lg:hidden p-3"
      />
      <SearchContent />
      <RightContent />
    </header>
  );
};

export default Header;
