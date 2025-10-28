"use client";
import Button from "@/app/components/button";
import UserProfile from "@/app/components/userProfile";
import { GoPlus } from "react-icons/go";
import ProfileMenu from "../profile-menu";
import { useEffect, useRef, useState } from "react";

const RightContent = () => {
  const [dropdown, setDropDown] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-4 relative" ref={containerRef}>
      <Button
        text="Add Bookmark"
        type="button"
        icon={<GoPlus className="icon-size" />}
        customStyle="btn-sm btn-primary-sm-light text-preset-3 custom-outline"
      />
      <UserProfile dropdown={dropdown} setDropDown={setDropDown} />

      <ProfileMenu dropdown={dropdown} />
    </div>
  );
};

export default RightContent;
