"use client";

import EmptyComponent from "@/app/components/emptyComponent";
import BookmarkCard from "@/app/components/main/bookmark-card";
import LoadingComponent from "@/app/components/main/loadingComponent";
import PageHeader from "@/app/components/main/pageHeader";
import { useBookmark } from "@/app/context/BookmarkContext";
import { useFilter } from "@/app/context/FilterContext";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { auth } from "@/app/firebase";
const Profile = () => {
  const { resetFilters } = useFilter();
  const { allBookmarks, loading } = useBookmark();
  const filteredData = allBookmarks?.filter(
    (bookmark) => bookmark.whoCreated === auth.currentUser?.uid
  );
  useEffect(() => {
    return () => {
      resetFilters();
    };
  }, []);

  if (loading) return <LoadingComponent />;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col gap-5 px-8 pt-8 py-16"
    >
      <PageHeader title="Your bookmarks" />

      {filteredData?.length === 0 ? (
        <div className="grid place-items-center h-[500px] ">
          <EmptyComponent />
        </div>
      ) : (
        <div className=" grid grid-cols-[338px_338px_338px] gap-8 max-xl:grid-cols-2 max-md:grid-cols-1">
          {filteredData?.map((bookmark, i) => (
            <BookmarkCard key={i} bookmark={bookmark} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Profile;
