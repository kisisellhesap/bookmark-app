import Button from "@/app/components/button";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { useFilter } from "@/app/context/FilterContext";
import { auth } from "@/app/firebase";
import { signOutMethod } from "@/app/firebase/allMethod";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
interface ProfileMenuProps {
  dropdown: boolean;
}
const ProfileMenu = ({ dropdown }: ProfileMenuProps) => {
  const { resetTags } = useFilter();
  const handleLogout = () => {
    signOutMethod();
    resetTags();
  };
  return (
    <AnimatePresence>
      {dropdown && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -5 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="w-[248px] radius-8 absolute right-0 top-16 shadow-1 border z-10 border-Neutral-100 dark:border-Neutral-500-d bg-Neutral-0 dark:bg-Neutral-600-d flex flex-col "
        >
          <div className="flex gap-3 items-center py-3 px-4 border-b border-b-Neutral-100 dark:border-b-Neutral-500-d">
            <Image
              src={"/images/image-avatar.webp"}
              alt="image-avatar"
              width={40}
              height={40}
              className="radius-full"
            />
            <div className="flex flex-col line-clamp-1">
              <p className="text-preset-4 text-Neutral-900 dark:text-Neutral-0-d">
                {auth.currentUser?.displayName}
              </p>
              <p className="text-[.6rem] text-Neutral-800 dark:text-Neutral-100-d ">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
          <div className="px-4 py-3 border-b border-b-Neutral-100 dark:border-b-Neutral-500-d flex items-center gap-2.5 text-Neutral-800 dark:text-Neutral-0-d">
            <IoColorPaletteOutline className="icon-size" />
            <span className="text-preset-4-medium">Theme</span>
            <ThemeToggle />
          </div>

          <div className=" py-1 px-2">
            <Button
              type="button"
              text="Logout"
              icon={<LuLogOut className="icon-size" />}
              customStyle="btn-dropdown text-preset-4-medium p-2 outline-0"
              onClick={handleLogout}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileMenu;
