// import Button from "../button";
// import { HiOutlineSwitchVertical } from "react-icons/hi";
// import FilterBtnDropDown from "./filter-btn/filter-btn-dropdown";
import { useState } from "react";

interface PageHeaderProps {
  title: string;
}
const PageHeader = ({ title }: PageHeaderProps) => {
  const [dropdown, setDropDown] = useState<boolean>(false);
  return (
    <div className="flex gap-4 items-center justify-between relative">
      <p className="text-preset-1 text-Neutral-900 dark:text-Neutral-0-d">
        {title}
      </p>
      {/* <Button
        icon={<HiOutlineSwitchVertical className="icon-size" />}
        type="button"
        text="Sort by"
        customStyle="btn-sm btn-secondary-sm-light btn-secondary-sm-dark text-preset-3 p-2 custom-outline w-fit"
        onClick={() => setDropDown(!dropdown)}
      />
      <FilterBtnDropDown dropdown={dropdown} setDropDown={setDropDown} /> */}
    </div>
  );
};

export default PageHeader;
