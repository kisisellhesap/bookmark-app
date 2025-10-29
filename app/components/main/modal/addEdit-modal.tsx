import { FaXmark } from "react-icons/fa6";
import Button from "../../button";
import CloseBtn from "../../close-btn";
import { useModal } from "@/app/context/ModalContext";
import FormInput from "../../auth/formWrapper/form-component/form-input";
import ModalTags from "./modalTags";

interface AddEditModalProps {
  title: string;
  text: string;
  btnText: string;
}
const AddEditModal = ({ title, text, btnText }: AddEditModalProps) => {
  const { setIsActive } = useModal();
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
      <form className="flex flex-col gap-5">
        <FormInput label="Title *" type="text" />
        <FormInput label="Description *" type="text" />
        <FormInput label="Website Url *" type="text" />

        <ModalTags />
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
