"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Bookmark } from "../types";
import {
  getBookmarksMethod,
  getUsersMethod,
  userIsAdmin,
} from "../firebase/allMethod";
import { useFilter } from "./FilterContext";
import { useRouter } from "next/navigation";

interface BookmarkContextType {
  allBookmarks: Bookmark[] | null;
  setAllBookmarks: Dispatch<SetStateAction<Bookmark[]>>;
  bookmarks: Bookmark[] | null;
  setBookmarks: Dispatch<SetStateAction<Bookmark[] | null>>;
  bookmark: Bookmark | null;
  setBookmark: Dispatch<SetStateAction<Bookmark | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [allBookmarks, setAllBookmarks] = useState<Bookmark[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[] | null>(null);
  const [bookmark, setBookmark] = useState<Bookmark | null>(null);
  const { tags, searchInput } = useFilter();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const selectedTags = tags
      .filter((t) => t.checked)
      .map((t) => t.text)
      .join(",");

    const search = searchInput.trim();

    const params = new URLSearchParams();
    if (selectedTags) params.set("tags", selectedTags);
    if (search) params.set("search", search);

    const queryString = params.toString();
    router.replace(`?${queryString}`);
  }, [tags, searchInput]);
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const bookmarks = await getBookmarksMethod();
        const users = await getUsersMethod();
        const adminBookmarks = userIsAdmin(bookmarks, users);

        setAllBookmarks(adminBookmarks);
        setBookmarks(adminBookmarks);
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    if (!allBookmarks.length) return;

    const selectedTags = tags.filter((t) => t.checked);
    const search = searchInput.trim().toLowerCase();

    let filtered = [...allBookmarks];

    // 🔹 Tag filtresi
    if (selectedTags.length > 0) {
      filtered = filtered.filter((bm) =>
        selectedTags.every((sel) => bm.tags.includes(sel.text))
      );
    }

    // 🔹 Arama filtresi
    if (search) {
      filtered = filtered.filter((bm) =>
        bm.title.toLowerCase().includes(search)
      );
    }

    setBookmarks(filtered);
  }, [tags, searchInput, allBookmarks]);

  console.log(allBookmarks, "allbookmarks");
  console.log(bookmarks, "bookmarks");
  console.log(tags);

  return (
    <BookmarkContext.Provider
      value={{
        allBookmarks,
        setAllBookmarks,
        bookmarks,
        setBookmarks,
        loading,
        setLoading,
        bookmark,
        setBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmark = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useTags must be used within a TagsProvider");
  }
  return context;
};
