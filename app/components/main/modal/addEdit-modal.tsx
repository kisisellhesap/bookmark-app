"use client";
import { FaXmark } from "react-icons/fa6";
import Button from "../../button";
import CloseBtn from "../../close-btn";
import { useModal } from "@/app/context/ModalContext";
import FormInput from "../../auth/formWrapper/form-component/form-input";
import ModalTags from "./modalTags";
import { ChangeEvent, FormEvent, useState } from "react";
import { Bookmark } from "@/app/types";
import { auth } from "@/app/firebase";
import {
  addBookmarkMethod,
  editBookmarkMethod,
} from "@/app/firebase/allMethod";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useBookmark } from "@/app/context/BookmarkContext";
import { serverTimestamp, Timestamp } from "firebase/firestore";

interface AddEditModalProps {
  title: string;
  text: string;
  btnText: string;
}
const AddEditModal = ({ title, text, btnText }: AddEditModalProps) => {
  const uid = auth.currentUser?.uid;
  const { bookmark, setBookmark } = useBookmark();

  const initialStateForm: Bookmark = {
    uid: bookmark?.uid ?? "",
    title: bookmark?.title ?? "",
    url: bookmark?.url ?? "",
    favicon: bookmark?.favicon ?? "",
    description: bookmark?.description ?? "",
    tags: bookmark?.tags ?? [],
    pinned: bookmark?.pinned ?? false,
    whoPinned: bookmark?.whoPinned ?? [],
    isArchived: bookmark?.isArchived ?? false,
    whoArchived: bookmark?.whoArchived ?? [],
    visitCount: bookmark?.visitCount ?? 0,
    createdAt: bookmark?.createdAt ?? null,
    lastVisited: bookmark?.lastVisited ?? null,
    whoCreated: bookmark?.whoCreated ?? "",
  };

  const { setIsActive, activeTags, setActiveTags, type } = useModal();
  const [form, setForm] = useState<Bookmark>(initialStateForm);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(activeTags);
    if (activeTags.length !== 0) {
      const filterBookmark = {
        ...initialStateForm,
        uid: uuidv4(),
        title: form.title,
        url: form.url,
        description: form.description,
        tags: activeTags,
        createdAt: serverTimestamp() as Timestamp,
        whoCreated: uid,
      };

      console.log(filterBookmark);
      if (type === "add") {
        addBookmarkMethod(filterBookmark);
        toast.success("bookmark added successfully");
      }

      if (type == "edit" && bookmark) {
        const filterBookmark = {
          ...initialStateForm,
          title: form.title,
          url: form.url,
          description: form.description,
          tags: activeTags,
          createdAt: serverTimestamp() as Timestamp,
          whoCreated: uid,
        };

        editBookmarkMethod(filterBookmark);
        toast.success("bookmark edit successfully");
      }

      setIsActive(false);
      setBookmark(null);
      setActiveTags([]);
    } else {
      toast.error("Please add a tag");
    }
  };
  console.log(form, "form");

  return (
    <div
      className="p-8 radius-16 shadow-1 flex flex-col gap-8 bg-Neutral-0 dark:bg-Neutral-800-d relative w-full max-w-[570px]"
      onClick={(e) => e.stopPropagation()}
    >
      <CloseBtn
        icon={<FaXmark className="icon-size" />}
        onClick={() => {
          setBookmark(null);
          setActiveTags([]);
          setIsActive(false);
        }}
        responsive="absolute right-3 top-2 border border-Neutral-400 dark:border-Neutral-400-d bg-Neutral-0 dark:bg-Neutral-800-d text-Neutral-900 dark:text-Neutral-0-d hover:bg-Neutral-100 dark:hover:bg-Neutral-500-d"
      />
      <div className="flex flex-col gap-2">
        <p className="text-preset-1 text-Neutral-900 dark:text-Neutral-0-d">
          {title}
        </p>
        <p className="text-preset-4-medium text-Neutral-800 dark:text-Neutral-100-d">
          {text}
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5  overflow-y-auto h-[550px] pr-6 py-2"
      >
        <FormInput
          label="Title *"
          type="text"
          name="title"
          value={form.title}
          onChange={(e) => handleChange(e)}
        />
        <FormInput
          label="Description *"
          type="text"
          name="description"
          length={form.description.length}
          onChange={(e) => handleChange(e)}
          value={form.description}
        />
        <FormInput
          label="Website Url *"
          type="text"
          name="url"
          onChange={(e) => handleChange(e)}
          value={form.url}
        />

        <ModalTags />
        <div className="flex gap-4 self-end">
          <Button
            type="button"
            text="Cancel"
            customStyle="btn-sm btn-secondary-sm-light btn-secondary-sm-dark text-preset-3 p-2 custom-outline w-fit"
            onClick={() => {
              setBookmark(null);
              setIsActive(false);
              setActiveTags([]);
            }}
          />
          <Button
            type="submit"
            text={btnText}
            customStyle={`btn-sm ${
              btnText === "Delete permanently"
                ? "btn-primary-sm-red custom-outline-red"
                : "btn-primary-sm-light custom-outline"
            }  text-preset-3 `}
          />
        </div>
      </form>
    </div>
  );
};

export default AddEditModal;
