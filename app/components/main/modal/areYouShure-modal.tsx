import { FaXmark } from "react-icons/fa6";
import Button from "../../button";
import CloseBtn from "../../close-btn";
import { useModal } from "@/app/context/ModalContext";
import { useBookmark } from "@/app/context/BookmarkContext";

interface AreYouShureModalProps {
  title: string;
  text: string;
  btnText: string;
  onClick?: () => void;
}
const AreYouShureModal = ({
  title,
  text,
  btnText,
  onClick,
}: AreYouShureModalProps) => {
  const { setIsActive } = useModal();
  const { setBookmark } = useBookmark();

  return (
    <div
      className="p-6 radius-12 shadow-1 flex flex-col gap-6 bg-Neutral-0 dark:bg-Neutral-800-d relative w-full max-w-[450px]"
      onClick={(e) => e.stopPropagation()}
    >
      <CloseBtn
        icon={<FaXmark className="icon-size" />}
        onClick={() => setIsActive(false)}
        responsive="absolute right-3 top-2"
      />
      <div className="flex flex-col gap-2">
        <p className="text-preset-1 text-Neutral-900 dark:text-Neutral-0-d">
          {title}
        </p>
        <p className="text-preset-4-medium text-Neutral-800 dark:text-Neutral-100-d">
          {text}
        </p>
      </div>

      <div className="flex gap-4 self-end">
        <Button
          type="button"
          text="Cancel"
          customStyle="btn-sm btn-secondary-sm-light btn-secondary-sm-dark text-preset-3 p-2 custom-outline w-fit"
          onClick={() => {
            setIsActive(false);
            setBookmark(null);
          }}
        />
        <Button
          type="button"
          text={btnText}
          customStyle={`btn-sm ${
            btnText === "Delete permanently"
              ? "btn-primary-sm-red custom-outline-red"
              : "btn-primary-sm-light custom-outline"
          }  text-preset-3 `}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default AreYouShureModal;
