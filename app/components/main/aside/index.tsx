import Logo from "../../Logo";
import { links } from "@/app/constant/links";
import LinkBtn from "./link-btn";
import TagList from "./tag-list";

const Aside = () => {
  return (
    <div className="w-[296px] bg-(--color-Neutral-0) h-screen">
      <aside className="w-[296px] h-screen  bg-Neutral-0 dark:bg-Neutral-800-d border-r border-r-Neutral-300 dark:border-r-Neutral-500-d">
        <div className="px-5 py-5">
          <Logo />
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

// text-(--color-Neutral-0)
// bg-(--color-Teal-800)
