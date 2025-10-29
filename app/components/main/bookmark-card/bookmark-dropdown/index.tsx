import { bookmarkDropdownLinks } from "@/app/constant/bookmark-dropdown-link";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/app/components/button";

interface BookmarkDropdownProps {
  dropdown: boolean;
  setDropDown: Dispatch<SetStateAction<boolean>>;
}
const BookmarkDropdown = ({ dropdown, setDropDown }: BookmarkDropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <AnimatePresence>
      {dropdown && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -5 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          ref={containerRef}
          className="absolute top-14 right-5 p-2 shadow-1 flex flex-col gap-1 bg-Neutral-0 dark:bg-Neutral-600-d radius-8 w-[200px] border border-Neutral-100 dark:border-Neutral-500-d"
        >
          {bookmarkDropdownLinks.map((link, i) => (
            <Button
              key={i}
              text={link.text}
              type="button"
              icon={link.icon}
              customStyle="btn-dropdown text-preset-4-medium p-2 custom-outline"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookmarkDropdown;
