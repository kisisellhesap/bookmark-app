"use client";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import BookmarkDropdown from "./bookmark-dropdown";
import { useState } from "react";
import OpenBtn from "../../open-btn";

const BookmarkCard = () => {
  const [dropdown, setDropDown] = useState<boolean>(false);

  return (
    <div className="bg-Neutral-0 dark:bg-Neutral-800-d radius-12 shadow-1  relative">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-3">
          <Image
            src={"/images/favicon/favicon-frontend-mentor.png"}
            alt="img"
            width={44}
            height={44}
            className=" shadow-1 radius-full bg-Neutral-0 border-0 outline-2 -outline-offset-1 outline-Neutral-100 dark:outline-Neutral-500-d"
          />
          <div className="flex flex-col">
            <p className="text-preset-2 text-Neutral-900 dark:text-Neutral-0-d">
              Frontend Mentor
            </p>
            <span className="text-preset-5 text-Neutral-800 dark:text-Neutral-100-d">
              frontendmentor.io
            </span>
          </div>

          <OpenBtn
            icon={<BsThreeDotsVertical className="icon-size" />}
            responsive="w-[32px] h-[32px] ml-auto custom-outline"
            onClick={() => setDropDown(!dropdown)}
          />
        </div>

        <hr className="text-Neutral-300 dark:text-Neutral-500-d h-px" />

        <p className="text-preset-4-medium text-Neutral-800 dark:text-Neutral-100-d">
          Improve your front-end coding skills by building real projects. Solve
          real-world HTML, CSS and JavaScript challenges whilst working to
          professional designs.
        </p>
        <div className="flex gap-2 ">
          <span className="px-2 py-0.5 radius-4 bg-Neutral-100 dark:bg-Neutral-600-d text-Neutral-800 dark:text-Neutral-100-d text-preset-5 shadow-1">
            Practice
          </span>
          <span className="px-2 py-0.5 radius-4 bg-Neutral-100 dark:bg-Neutral-600-d text-Neutral-800 dark:text-Neutral-100-d text-preset-5 shadow-1">
            Learning
          </span>{" "}
          <span className="px-2 py-0.5 radius-4 bg-Neutral-100 dark:bg-Neutral-600-d text-Neutral-800 dark:text-Neutral-100-d text-preset-5 shadow-1">
            Community
          </span>
        </div>
      </div>

      <div className="flex items-center py-3 px-4 gap-2 border-t border-t-Neutral-300 dark:border-t-Neutral-500-d">
        <div className="flex gap-4">
          <div className="flex gap-1.5 items-center text-Neutral-800 dark:text-Neutral-100-d">
            <MdOutlineRemoveRedEye className="w-3 h-3" />
            <span className="text-preset-5">47</span>
          </div>
          <div className="flex gap-1.5 items-center text-Neutral-800 dark:text-Neutral-100-d">
            <MdOutlineRemoveRedEye className="w-3 h-3" />
            <span className="text-preset-5">47</span>
          </div>
          <div className="flex gap-1.5 items-center text-Neutral-800 dark:text-Neutral-100-d">
            <MdOutlineRemoveRedEye className="w-3 h-3" />
            <span className="text-preset-5">47</span>
          </div>
        </div>
      </div>

      <BookmarkDropdown dropdown={dropdown} setDropDown={setDropDown} />
    </div>
  );
};

export default BookmarkCard;
