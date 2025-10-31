import { FaXmark } from "react-icons/fa6";
import Button from "../../button";
import CloseBtn from "../../close-btn";
import { useModal } from "@/app/context/ModalContext";
import FormInput from "../../auth/formWrapper/form-component/form-input";
import ModalTags from "./modalTags";
import { ChangeEvent, FormEvent, useState } from "react";
import { FieldValue, serverTimestamp } from "firebase/firestore";
import { Bookmark } from "@/app/types";
import { auth } from "@/app/firebase";
import { addBookmarkMethod } from "@/app/firebase/auth";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { stringToTimestamp } from "../../utils/toFirestoreTimestamp";

interface AddEditModalProps {
  title: string;
  text: string;
  btnText: string;
}
const AddEditModal = ({ title, text, btnText }: AddEditModalProps) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const uid = auth.currentUser?.uid;

  const initialStateForm: Bookmark = {
    uid: "",
    title: "",
    url: "",
    favicon: "",
    description: "",
    tags: [],
    pinned: false,
    isArchived: false,
    visitCount: 0,
    createdAt: null,
    lastVisited: null,
    whoCreated: "",
  };

  const { setIsActive } = useModal();
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
    // if (activeTags.length !== 0) {
    //   const filterBookmark = {
    //     uid: uuidv4(),
    //     title: form.title,
    //     url: form.url,
    //     favicon: "",
    //     description: form.description,
    //     tags: activeTags,
    //     pinned: false,
    //     isArchived: false,
    //     visitCount: 0,
    //     createdAt: null,
    //     lastVisited: null,
    //     whoCreated: uid,
    //   };

    //   addBookmarkMethod(filterBookmark);
    //   toast.success("bookmark added successfully");
    //   setIsActive(false);

    //   console.log(form);
    // } else {
    //   toast.error("Please add a tag");
    // }

    const filterBookmark = {
      uid: uuidv4(),
      title: "Flexbox Zombies",
      url: "https://mastery.games/flexboxzombies",
      favicon:
        "https://firebasestorage.googleapis.com/v0/b/bookmark-app-e64d4.firebasestorage.app/o/favicon-flexbox-zombies.png?alt=media&token=30355e31-a7c0-4c91-84f6-e16d8e2d0e40",
      description:
        "Master flexbox layout in CSS by playing a survival game. Use flexbox to position your crossbow and survive the zombie apocalypse.",
      tags: ["CSS", "Practice", "Layout"],
      pinned: false,
      isArchived: true,
      visitCount: 6,
      createdAt: stringToTimestamp("2024-02-22T08:50:00Z"),
      lastVisited: stringToTimestamp("2025-04-18T15:30:00Z"),
      whoCreated: uid,
    };

    addBookmarkMethod(filterBookmark);
    toast.success("bookmark added successfully");
  };

  return (
    <div
      className="p-8 radius-16 shadow-1 flex flex-col gap-8 bg-Neutral-0 dark:bg-Neutral-800-d relative w-full max-w-[570px]"
      onClick={(e) => e.stopPropagation()}
    >
      <CloseBtn
        icon={<FaXmark className="icon-size" />}
        onClick={() => setIsActive(false)}
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
          onChange={(e) => handleChange(e)}
        />
        <FormInput
          label="Description *"
          type="text"
          name="description"
          length={form.description.length}
          onChange={(e) => handleChange(e)}
        />
        <FormInput
          label="Website Url *"
          type="text"
          name="url"
          onChange={(e) => handleChange(e)}
        />

        <ModalTags activeTags={activeTags} setActiveTags={setActiveTags} />
        <div className="flex gap-4 self-end">
          <Button
            type="button"
            text="Cancel"
            customStyle="btn-sm btn-secondary-sm-light btn-secondary-sm-dark text-preset-3 p-2 custom-outline w-fit"
            onClick={() => setIsActive(false)}
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
