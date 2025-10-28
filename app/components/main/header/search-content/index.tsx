import { FiSearch } from "react-icons/fi";

const SearchContent = () => {
  return (
    <div className="bg-Neutral-0 hover:bg-Neutral-100 dark:hover:bg-Neutral-600-d dark:bg-Neutral-500-d flex flex-1 max-w-[320px] gap-1.5 items-center text-preset-4-medium p-3 radius-8 text-Neutral-800 dark:text-Neutral-100-d w-fit border border-Neutral-300 dark:border-Neutral-500-d  custom-outline-within">
      <FiSearch className="w-5 h-5" />
      <input
        type="text"
        placeholder="Search by title..."
        className="outline-0 flex-1 placeholder:text-Neutral-800 dark:placeholder:text-Neutral-100-d"
      />
    </div>
  );
};

export default SearchContent;
