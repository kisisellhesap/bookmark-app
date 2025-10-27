import Button from "@/app/components/button";
import { FaPlus } from "react-icons/fa";

const RightContent = () => {
  return (
    <div className="">
      <Button text="Add Bookmark" type="button" icon={<FaPlus />} />
    </div>
  );
};

export default RightContent;
