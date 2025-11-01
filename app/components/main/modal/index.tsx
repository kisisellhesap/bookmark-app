"use client";
import { useModal } from "@/app/context/ModalContext";
import AreYouShureModal from "./areYouShure-modal";
import AddEditModal from "./addEdit-modal";
import {
  addArchiveMethod,
  deleteMethod,
  RemoveArchiveMethod,
} from "@/app/firebase/allMethod";
import { useBookmark } from "@/app/context/BookmarkContext";
import { auth } from "@/app/firebase";
import toast from "react-hot-toast";

const Modal = () => {
  const { isActive, setIsActive, setActiveTags, type } = useModal();
  const { bookmark, setBookmark } = useBookmark();

  const handleArchiveAdd = () => {
    try {
      if (bookmark) {
        addArchiveMethod(bookmark, auth.currentUser?.uid ?? "");
        toast.success("bookmark archive added");
        setIsActive(false);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleArchiveRemove = () => {
    try {
      if (bookmark) {
        RemoveArchiveMethod(bookmark, auth.currentUser?.uid ?? "");
        toast.success("bookmark archive remove");
        setIsActive(false);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleDeleteBookmark = () => {
    if (bookmark) {
      deleteMethod(bookmark);
      toast.success("bookmark remove");
      setIsActive(false);
    }
  };

  return (
    <div
      onClick={() => {
        setIsActive(false);
        setActiveTags([]);
        setBookmark(null);
      }}
      className={`fixed inset-0 bg-black/50 z-20 backdrop-blur-xs  grid place-items-center modal   ${isActive}
          ? "max-lg:opacity-100 max-lg:pointer-events-auto"
          : "max-lg:opacity-0 max-lg:pointer-events-none"
      }`}
    >
      {type === "archive" ? (
        <AreYouShureModal
          title="Archive bookmark"
          text="Are you sure you want to archive this bookmark?"
          btnText="Archive"
          onClick={handleArchiveAdd}
        />
      ) : type === "delete" ? (
        <AreYouShureModal
          title="Delete bookmark"
          text="Are you sure you want to delete this bookmark?"
          btnText="Delete permanently"
          onClick={handleDeleteBookmark}
        />
      ) : type === "unarchive" ? (
        <AreYouShureModal
          title="Unarchive bookmark"
          text="Move this bookmark back to your active list?"
          btnText="Unarchive"
          onClick={handleArchiveRemove}
        />
      ) : type === "add" ? (
        <AddEditModal
          title="Add a Bookmark"
          text="Save a link with details to keep your collection organized."
          btnText="Add Bookmark"
        />
      ) : (
        type === "edit" && (
          <AddEditModal
            title="Edit bookmark"
            text="Update your saved link details — change the title, description, URL, or tags anytime."
            btnText="Save Bookmark"
          />
        )
      )}
    </div>
  );
};

export default Modal;
