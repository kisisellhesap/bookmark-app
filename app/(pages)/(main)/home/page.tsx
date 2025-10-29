"use client";
import BookmarkCard from "@/app/components/main/bookmark-card";
import PageHeader from "@/app/components/main/pageHeader";
import { useFilter } from "@/app/context/FilterContext";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  const { resetFilters } = useFilter();
  useEffect(() => {
    return () => {
      console.log("Home sayfasından çıkılıyor");
      resetFilters();
    };
  }, []);

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
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
      </div>
    </motion.div>
  );
};

export default Home;
