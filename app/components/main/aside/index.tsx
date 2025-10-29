"use client";
import Logo from "../../Logo";
import { links } from "@/app/constant/links";
import LinkBtn from "./link-btn";
import TagList from "./tag-list";
import { useAside } from "@/app/context/AsideContext";
import { FaXmark } from "react-icons/fa6";
import CloseBtn from "../../close-btn";

const Aside = () => {
  const { asideIsActive, setAsideIsActive } = useAside();

  return (
    <div
      className={`sticky h-full top-0 max-lg:fixed max-lg:inset-0 shadow-1  transition-all max-lg:bg-black/50 max-lg:z-20 max-lg:backdrop-blur-xs ${
        asideIsActive
          ? "max-lg:opacity-100 max-lg:pointer-events-auto"
          : "max-lg:opacity-0 max-lg:pointer-events-none"
      }`}
      onClick={() => setAsideIsActive(false)}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className="w-[296px] h-screen bg-Neutral-0 dark:bg-Neutral-800-d border-r border-r-Neutral-300 dark:border-r-Neutral-500-d"
      >
        <div className="px-5 py-5 flex items-center justify-between gap-3 relative">
          <Logo />
          <div className="absolute right-2 top-2">
            <CloseBtn
              icon={<FaXmark className="icon-size" />}
              onClick={() => setAsideIsActive(false)}
              responsive="lg:hidden"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="px-4 pt-5 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              {links.map((link, i) => (
                <LinkBtn key={i} link={link} />
              ))}
            </div>
          </div>

          <TagList />
        </div>
      </aside>
    </div>
  );
};

export default Aside;
