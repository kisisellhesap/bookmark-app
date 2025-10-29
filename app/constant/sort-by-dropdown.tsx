import { FaCheck } from "react-icons/fa6";

export const filterInitialState = [
  {
    text: "Recently added",
    checked: true,
    icon: <FaCheck className="icon-size" />,
  },
  {
    text: "Recently visited",
    checked: false,
    icon: <FaCheck className="icon-size" />,
  },
  {
    text: "Most visited",
    checked: false,
    icon: <FaCheck className="icon-size" />,
  },
];
