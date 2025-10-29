import { useFilter } from "@/app/context/FilterContext";
import Button from "../../button";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

const ModalTags = () => {
  const { tags } = useFilter();
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const handleAddTag = (item: string) => {
    if (!activeTags.includes(item)) {
      setActiveTags((prev) => [...prev, item]);
    }
  };

  const handleDeleteTag = (item: string) => {
    const filteredTags = activeTags.filter((tag) => tag !== item);
    setActiveTags(filteredTags);
  };

  const handleResetTag = () => {
    setActiveTags([]);
  };

  console.log(activeTags);
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center gap-3">
          <label className="text-preset-4 text-Neutral-900 dark:text-Neutral-0-d">
            Tags *
          </label>
          <button
            type="button"
            className="text-preset-5 hover:underline hover:text-Neutral-800 cursor-pointer"
            onClick={handleResetTag}
          >
            Reset
          </button>
        </div>

        <div className=" flex gap-2 radius-8 p-2 overflow-x-auto h-11">
          {activeTags.length === 0 ? (
            <span className=" px-2 py-1 radius-4 bg-Neutral-100 dark:bg-Neutral-600-d text-Neutral-800 dark:text-Neutral-100-d text-preset-5 shadow-1 ">
              Choose a tag
            </span>
          ) : (
            activeTags.map((tag, i) => (
              <div
                key={i}
                className=" px-2 py-1 radius-4 bg-Neutral-100 dark:bg-Neutral-600-d text-Neutral-800 dark:text-Neutral-100-d text-preset-5 shadow-1 flex items-center gap-2 "
              >
                <span className="">{tag}</span>
                <Button
                  type="button"
                  icon={
                    <FaXmark
                      className="w-4 h-4"
                      onClick={() => handleDeleteTag(tag)}
                    />
                  }
                  customStyle="outline-0"
                />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex gap-2 flex-wrap h-20 overflow-y-scroll  p-2">
        {tags.map((tag, i) => (
          <div
            key={i}
            className=" px-2 py-1 radius-4 bg-Neutral-100 dark:bg-Neutral-600-d text-Neutral-800 dark:text-Neutral-100-d text-preset-5 shadow-1 flex items-center gap-2 "
          >
            <Button
              type="button"
              text={tag.text}
              onClick={() => handleAddTag(tag.text)}
              customStyle="outline-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalTags;
