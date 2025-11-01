import { tagsInitialState } from "@/app/constant/tags";
import { useBookmark } from "@/app/context/BookmarkContext";
import { useFilter } from "@/app/context/FilterContext";
import { AsideTag } from "@/app/types";
import { FaCheck } from "react-icons/fa";

interface TagBtnProps {
  tag: AsideTag;
}
const TagBtn = ({ tag }: TagBtnProps) => {
  const { allBookmarks } = useBookmark();

  const { toggleTag } = useFilter();
  const countTag = allBookmarks?.filter((bookmark) =>
    bookmark.tags.includes(tag.text)
  );
  console.log(countTag);

  return (
    <div
      className="tag px-3 py-2 radius-6  flex gap-2 items-center text-Neutral-800 hover:text-Neutral-900 dark:hover:text-Neutral-0-d  dark:text-Neutral-100-d text-preset-4 cursor-pointer hover:bg-Neutral-100 dark:hover:bg-Neutral-600-d group"
      onClick={() => toggleTag(tag.text)}
    >
      <div
        className={`flex items-center justify-center p-0.5 radius-4 border border-Neutral-500    w-4 h-4 hover:bg-Neutral-300 dark:hover:bg-Neutral-600-d dark:border-Neutral-300-d cursor-pointer ${
          tag.checked ? "bg-Teal-700 text-Neutral-0" : "bg-transparent"
        }`}
      >
        {tag.checked && <FaCheck className="text-lg" />}
      </div>
      <span className="">{tag.text}</span>
      <div className="ml-auto bg-Neutral-100 border border-transparent group-hover:border-Neutral-500  dark:border-Neutral-500-d dark:bg-Neutral-600-d px-2 py-0.5 radius-full text-preset-5">
        {countTag?.length}
      </div>
    </div>
  );
};

export default TagBtn;
