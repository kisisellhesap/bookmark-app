"use client";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import BookmarkDropdown from "./bookmark-dropdown";
import { useState } from "react";
import OpenBtn from "../../open-btn";
import { Bookmark } from "@/app/types";
import moment from "moment";
import { useBookmark } from "@/app/context/BookmarkContext";
import { FaBookmark } from "react-icons/fa";

interface BookmarkCardProps {
  bookmark: Bookmark;
}
const BookmarkCard = ({ bookmark }: BookmarkCardProps) => {
  const [dropdown, setDropDown] = useState<boolean>(false);
  const { setBookmark } = useBookmark();

  return (
    <div className="bg-Neutral-0 dark:bg-Neutral-800-d radius-12 shadow-1 flex flex-col relative">
      <div className="flex flex-col gap-4  p-4 flex-1">
        <div className="flex gap-3">
          {bookmark.favicon ? (
            <Image
              src={bookmark.favicon}
              alt="img"
              width={44}
              height={44}
              className=" shadow-1 radius-full bg-Neutral-0 border-0 outline-2 -outline-offset-1 outline-Neutral-100 dark:outline-Neutral-500-d"
            />
          ) : (
            <div className=" shadow-1 radius-full bg-Neutral-0 dark:bg-Neutral-400-d border-0 outline-2 -outline-offset-1 outline-Neutral-100 dark:outline-Neutral-500-d w-11 h-11 flex items-center justify-center">
              <FaBookmark className="icon-size text-Teal-700 dark:text-Neutral-0-d" />
            </div>
          )}
          <div className="flex flex-col">
            <p className="text-preset-2 text-Neutral-900 dark:text-Neutral-0-d">
              {bookmark.title}
            </p>
            <span className="text-preset-5 text-Neutral-800 dark:text-Neutral-100-d">
              {bookmark.url}
            </span>
          </div>

          <OpenBtn
            icon={<BsThreeDotsVertical className="icon-size" />}
            responsive="w-[32px] h-[32px] ml-auto custom-outline"
            onClick={() => {
              setDropDown(!dropdown);
              setBookmark(bookmark);
            }}
          />
        </div>

        <hr className="text-Neutral-300 dark:text-Neutral-500-d h-px" />

        <div className="flex flex-col gap-4 flex-1 justify-between">
          <p className="text-preset-4-medium text-Neutral-800 dark:text-Neutral-100-d h-full  break-all">
            {bookmark.description}
          </p>
          <div className="flex gap-2 ">
            {bookmark.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 radius-4 bg-Neutral-100 dark:bg-Neutral-600-d text-Neutral-800 dark:text-Neutral-100-d text-preset-5 shadow-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center py-3 px-4 gap-2 border-t border-t-Neutral-300 dark:border-t-Neutral-500-d">
        <div className="flex gap-4">
          <div className="flex gap-1.5 items-center text-Neutral-800 dark:text-Neutral-100-d">
            <MdOutlineRemoveRedEye className="w-3 h-3" />
            <span className="text-preset-5">{bookmark.visitCount}</span>
          </div>
          <div className="flex gap-1.5 items-center text-Neutral-800 dark:text-Neutral-100-d">
            <MdAccessTime className="w-3 h-3" />

            <span className="text-preset-5">
              {moment(bookmark.lastVisited?.toDate()).format("DD MMM")}
            </span>
          </div>
          <div className="flex gap-1.5 items-center text-Neutral-800 dark:text-Neutral-100-d">
            <CiCalendar className="w-3 h-3" />
            <span className="text-preset-5">
              {moment(bookmark.createdAt?.toDate()).format("DD MMM")}
            </span>
          </div>
        </div>
      </div>

      <BookmarkDropdown
        dropdown={dropdown}
        setDropDown={setDropDown}
        bookmark={bookmark}
      />
    </div>
  );
};

export default BookmarkCard;
