import { RiHome3Line } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { BsArchive } from "react-icons/bs";

export const links = [
  { text: "Home", link: "/home", icon: <RiHome3Line className="icon-size" /> },
  {
    text: "Profile",
    link: "/profile",
    icon: <RiUser3Line className="icon-size" />,
  },
  {
    text: "Archived",
    link: "/archived",
    icon: <BsArchive className="icon-size" />,
  },
];
