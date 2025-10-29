import {
  archivedDropdownLinks,
  bookmarkDropdownLinks,
} from "@/app/constant/bookmark-dropdown-link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/app/components/button";
import { redirect, usePathname } from "next/navigation";
import { useModal } from "@/app/context/ModalContext";

interface BookmarkDropdownProps {
  dropdown: boolean;
  setDropDown: Dispatch<SetStateAction<boolean>>;
  copyUrl: string;
}
const BookmarkDropdown = ({
  dropdown,
  setDropDown,
  copyUrl,
}: BookmarkDropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dropdownLinks, setDropdownLinks] = useState(bookmarkDropdownLinks);
  const { setIsActive, setType } = useModal();
  const path = usePathname();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  const handleVisit = (text: string) => {
    redirect("https://www.frontendmentor.io");
  };

  const handleClick = (type: string) => {
    switch (type) {
      case "Visit":
        handleVisit("s");
        break;
      case "Copy URL":
        handleCopy(copyUrl);
        break;
      case "Unpin":
        alert("Düzenleniyor...");
        break;
      case "Edit":
        alert("Paylaşıldı!");

        setType("edit");
        setIsActive(true);
        break;
      case "Archive":
        setType("archive");

        setIsActive(true);
        break;
      case "Unarchive":
        setType("unarchive");

        setIsActive(true);
        break;
      case "Delete permanently":
        setType("delete");
        setIsActive(true);
        break;
      default:
        alert("Bilinmeyen işlem!");
    }
  };

  useEffect(() => {
    if (path === "/home") {
      setDropdownLinks(bookmarkDropdownLinks);
    } else {
      setDropdownLinks(archivedDropdownLinks);
    }
  }, [path]);

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
          {dropdownLinks.map((link, i) => (
            <Button
              key={i}
              text={link.text}
              type="button"
              icon={link.icon}
              customStyle="btn-dropdown text-preset-4-medium p-2 custom-outline"
              onClick={() => handleClick(link.text)}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookmarkDropdown;
