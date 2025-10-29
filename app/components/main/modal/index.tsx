import { useModal } from "@/app/context/ModalContext";
import AreYouShureModal from "./areYouShure-modal";

const Modal = () => {
  const { isActive, setIsActive, type } = useModal();

  return (
    <div
      onClick={() => setIsActive(false)}
      className={`fixed inset-0 bg-black/50 z-20 backdrop-blur-xs  grid place-items-center modal   ${isActive}
          ? "max-lg:opacity-100 max-lg:pointer-events-auto"
          : "max-lg:opacity-0 max-lg:pointer-events-none"
      }`}
    >
      {type === "archive" ? (
        <AreYouShureModal
          title="Archive bookmark"
          text="Are you sure you want to archive this bookmark?"
          btnText="Archive"
        />
      ) : type === "delete" ? (
        <AreYouShureModal
          title="Delete bookmark"
          text="Are you sure you want to delete this bookmark?"
          btnText="Delete permanently"
        />
      ) : type === "unarchive" ? (
        <AreYouShureModal
          title="Unarchive bookmark"
          text="Move this bookmark back to your active list?"
          btnText="Unarchive"
        />
      ) : type === "edit" ? (
        ""
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
