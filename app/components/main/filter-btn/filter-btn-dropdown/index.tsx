import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/app/components/button";
import { useFilter } from "@/app/context/FilterContext";

interface FilterBtnDropDownProps {
  dropdown: boolean;
  setDropDown: Dispatch<SetStateAction<boolean>>;
}
const FilterBtnDropDown = ({
  dropdown,
  setDropDown,
}: FilterBtnDropDownProps) => {
  const { filters, changeFilter } = useFilter();

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
          className="absolute top-14 right-5 p-2 shadow-1 flex z-10 flex-col gap-1 bg-Neutral-0 dark:bg-Neutral-600-d radius-8 w-[200px] border border-Neutral-100 dark:border-Neutral-500-d"
        >
          {filters.map((filter, i) => (
            <Button
              key={i}
              text={filter.text}
              type="button"
              onClick={() => changeFilter(filter.text)}
              customStyle="btn-dropdown text-preset-4-medium p-2 custom-outline"
              check={filter.checked}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterBtnDropDown;
