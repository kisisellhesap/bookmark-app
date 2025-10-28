import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface UserProfileProps {
  dropdown: boolean;
  setDropDown: Dispatch<SetStateAction<boolean>>;
}
const UserProfile = ({ dropdown, setDropDown }: UserProfileProps) => {
  return (
    <Image
      tabIndex={0}
      src={"/images/image-avatar.webp"}
      alt="image-avatar"
      width={40}
      height={40}
      className="cursor-pointer custom-outline radius-full"
      onClick={() => setDropDown(!dropdown)}
    />
  );
};

export default UserProfile;
