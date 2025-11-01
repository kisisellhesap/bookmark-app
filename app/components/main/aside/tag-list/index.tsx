"use client";
import { useFilter } from "@/app/context/FilterContext";
import TagBtn from "./tag-btn";

const TagList = () => {
  const { tags, resetTags } = useFilter();

  return (
    <div className="tag-wrapper px-4">
      <div className="flex justify-between items-center text-Neutral-500">
        <span className="text-preset-4  dark:text-color-Neutral-100 px-3 pt-1">
          Tags
        </span>
        <button
          className="text-preset-5 hover:underline hover:text-Neutral-800 cursor-pointer"
          onClick={resetTags}
        >
          Reset
        </button>
      </div>

      <div className="tags-container mt-2 flex flex-col gap-1 h-[505px] overflow-y-scroll pr-2">
        {tags.map((tag, i) => (
          <TagBtn tag={tag} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TagList;
