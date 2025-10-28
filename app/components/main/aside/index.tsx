"use client";
import Logo from "../../Logo";
import { links } from "@/app/constant/links";
import LinkBtn from "./link-btn";
import TagList from "./tag-list";
import { useAside } from "@/app/context/AsideContext";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import CloseBtn from "../../close-btn";

const Aside = () => {
  const { asideIsActive, setAsideIsActive } = useAside();
  return (
    <AnimatePresence>
      {asideIsActive && (
        <motion.div
          className="h-screen max-lg:absolute max-lg:inset-0 max-lg:bg-black/50 max-lg:z-10 max-lg:backdrop-blur-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setAsideIsActive(false)}
        >
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.15,
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-[296px] h-screen bg-Neutral-0 dark:bg-Neutral-800-d border-r border-r-Neutral-300 dark:border-r-Neutral-500-d"
          >
            <div className="px-5 py-5 flex items-center justify-between gap-3 relative">
              <Logo />
              <div className="absolute right-2 top-2">
                <CloseBtn
                  icon={<FaXmark className="icon-size" />}
                  onClick={() => setAsideIsActive(false)}
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
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Aside;
