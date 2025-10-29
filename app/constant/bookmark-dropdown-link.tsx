import { GoLinkExternal } from "react-icons/go";
import { MdContentCopy } from "react-icons/md";
import { TiPinOutline } from "react-icons/ti";
import { LiaEdit } from "react-icons/lia";
import { BsArchive } from "react-icons/bs";

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
