import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/app/components/button";
import { useModal } from "@/app/context/ModalContext";
import { Bookmark } from "@/app/types";
import toast from "react-hot-toast";
import { GoLinkExternal } from "react-icons/go";
import { MdContentCopy } from "react-icons/md";
// import { BsPinAngle } from "react-icons/bs";
// import { BsPin } from "react-icons/bs";

import { LiaEdit } from "react-icons/lia";
import { BsArchive } from "react-icons/bs";
import { IoIosRefresh } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";
import { auth } from "@/app/firebase";
import { useBookmark } from "@/app/context/BookmarkContext";
import { deleteMethod } from "@/app/firebase/allMethod";
interface BookmarkDropdownProps {
  dropdown: boolean;
  setDropDown: Dispatch<SetStateAction<boolean>>;
  bookmark: Bookmark;
}
const BookmarkDropdown = ({
  dropdown,
  setDropDown,
  bookmark,
}: BookmarkDropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setIsActive, setType, setActiveTags } = useModal();
  const { setBookmark } = useBookmark();
  const userUid = auth.currentUser?.uid ?? "";

  const forArchive = bookmark.whoArchived.includes(userUid);
  // const forPin = bookmark.whoPinned.includes(userUid);

  const handleVisit = async () => {
    window.open(bookmark.url, "_blank");
  };
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("URL copied successfully");
  };

  // const handlePin = () => {
  //   if (forPin) {
  //   } else {
  //   }
  //   setIsActive(true);
  // };

  const handleEdit = () => {
    setType("edit");
    setIsActive(true);
    setActiveTags(bookmark.tags);
  };

  const handleArchive = () => {
    if (forArchive) {
      setType("unarchive");
    } else {
      setType("archive");
    }
    setIsActive(true);
  };

  const handleDelete = () => {
    setType("delete");
    setIsActive(true);
  };

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
          className="absolute top-14 right-5 p-2 shadow-1 flex flex-col gap-1 bg-Neutral-0 dark:bg-Neutral-600-d radius-8 w-[200px] border border-Neutral-100 dark:border-Neutral-500-d z-10"
        >
          <Button
            text={"Visit"}
            type="button"
            icon={<GoLinkExternal className="w-4 h-4" />}
            customStyle="btn-dropdown text-preset-4-medium p-2 custom-outline"
            onClick={handleVisit}
          />
          <Button
            text={"Copy URL"}
            type="button"
            icon={<MdContentCopy className="w-4 h-4" />}
            customStyle="btn-dropdown text-preset-4-medium p-2 custom-outline"
            onClick={() => handleCopy(bookmark.url)}
          />

          {userUid === bookmark.whoCreated && (
            <Button
              text={"Edit"}
              type="button"
              icon={<LiaEdit className="w-4 h-4" />}
              customStyle="btn-dropdown text-preset-4-medium p-2 custom-outline"
              onClick={handleEdit}
            />
          )}

          {auth.currentUser?.uid !== bookmark.whoCreated && (
            <Button
              text={`${forArchive ? "Unarchive" : "Archive"}`}
              type="button"
              icon={
                forArchive ? (
                  <IoIosRefresh className="w-4 h-4" />
                ) : (
                  <BsArchive className="w-4 h-4" />
                )
              }
              customStyle="btn-dropdown text-preset-4-medium p-2 custom-outline"
              onClick={handleArchive}
            />
          )}

          {bookmark.whoCreated === userUid && (
            <Button
              text={"Delete permanently"}
              type="button"
              icon={<FaRegTrashCan className="w-4 h-4" />}
              customStyle="btn-dropdown text-preset-4-medium p-2 custom-outline"
              onClick={handleDelete}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookmarkDropdown;
