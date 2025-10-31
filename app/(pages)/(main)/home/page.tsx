"use client";
import BookmarkCard from "@/app/components/main/bookmark-card";
import PageHeader from "@/app/components/main/pageHeader";
import { useFilter } from "@/app/context/FilterContext";
import {
  getBookmarksMethod,
  getUsersMethod,
  userIsAdmin,
} from "@/app/firebase/auth";
import { Bookmark } from "@/app/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
  const { resetFilters } = useFilter();
  const [bookmarks, setBookmarks] = useState<Bookmark[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getBookmark = async () => {
      const bookmarks = await getBookmarksMethod();
      const users = await getUsersMethod();
      const adminBookmarks = userIsAdmin(bookmarks, users);
      setBookmarks(adminBookmarks);
      setLoading(false);
    };
    getBookmark();

    return () => {
      getBookmark();

      resetFilters();
    };
  }, []);

  console.log(bookmarks, "bookmarks");

  if (loading) return <div>loading</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col gap-5 px-8 pt-8 py-16"
    >
      <PageHeader title="All bookmarks" />

      <div className=" grid grid-cols-[338px_338px_338px] gap-8 max-xl:grid-cols-2 max-md:grid-cols-1">
        {bookmarks?.map((bookmark, i) => (
          <BookmarkCard key={i} bookmark={bookmark} />
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
