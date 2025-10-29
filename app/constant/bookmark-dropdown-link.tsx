import { GoLinkExternal } from "react-icons/go";
import { MdContentCopy } from "react-icons/md";
import { TiPinOutline } from "react-icons/ti";
import { LiaEdit } from "react-icons/lia";
import { BsArchive } from "react-icons/bs";
import { IoIosRefresh } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";

export const bookmarkDropdownLinks = [
  {
    icon: <GoLinkExternal className="w-4 h-4" />,
    text: "Visit",
    link: "",
  },
  {
    icon: <MdContentCopy className="w-4 h-4" />,
    text: "Copy URL",
    link: "",
  },
  {
    icon: <TiPinOutline className="w-4 h-4" />,
    text: "Unpin",
    link: "",
  },
  {
    icon: <LiaEdit className="w-4 h-4" />,
    text: "Edit",
    link: "",
  },
  {
    icon: <BsArchive className="w-4 h-4" />,
    text: "Archive",
    link: "",
  },
];

export const archivedDropdownLinks = [
  {
    icon: <GoLinkExternal className="w-4 h-4" />,
    text: "Visit",
    link: "",
  },
  {
    icon: <MdContentCopy className="w-4 h-4" />,
    text: "Copy URL",
    link: "",
  },
  {
    icon: <IoIosRefresh className="w-4 h-4" />,
    text: "Unarchive",
    link: "",
  },
  {
    icon: <FaRegTrashCan className="w-4 h-4" />,
    text: "Delete permanently",
    link: "",
  },
];
