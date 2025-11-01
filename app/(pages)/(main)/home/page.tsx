"use client";
import EmptyComponent from "@/app/components/emptyComponent";
import BookmarkCard from "@/app/components/main/bookmark-card";
import LoadingComponent from "@/app/components/main/loadingComponent";
import PageHeader from "@/app/components/main/pageHeader";
import { useBookmark } from "@/app/context/BookmarkContext";
import { useFilter } from "@/app/context/FilterContext";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  const { resetFilters } = useFilter();
  const { bookmarks, setBookmarks, loading } = useBookmark();

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
      <PageHeader title="All bookmarks" />

      {bookmarks?.length === 0 ? (
        <div className="grid place-items-center h-[500px] ">
          <EmptyComponent />
        </div>
      ) : (
        <div className=" grid grid-cols-[338px_338px_338px] gap-8 max-xl:grid-cols-2 max-md:grid-cols-1">
          {bookmarks?.map((bookmark, i) => (
            <BookmarkCard key={i} bookmark={bookmark} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Home;
