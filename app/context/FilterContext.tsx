"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { AsideTag } from "../types";
import { tagsInitialState } from "../constant/tags";
import { filterInitialState } from "../constant/sort-by-dropdown";

interface FilterContextType {
  tags: AsideTag[];
  filters: AsideTag[];
  toggleTag: (text: string) => void;
  changeFilter: (text: string) => void;
  resetTags: () => void;
  resetFilters: () => void;
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [tags, setTags] = useState<AsideTag[]>(tagsInitialState);
  const [filters, setFilters] = useState<AsideTag[]>(filterInitialState);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const storedTags = localStorage.getItem("bookmark_tags");
    if (storedTags) {
      try {
        setTags(JSON.parse(storedTags));
      } catch (err) {
        console.error("Invalid tags in localStorage:", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmark_tags", JSON.stringify(tags));
  }, [tags]);

  useEffect(() => {
    const storedSearch = localStorage.getItem("bookmark_search");
    if (storedSearch) {
      try {
        setSearchInput(JSON.parse(storedSearch));
      } catch (err) {
        console.error("Invalid tags in localStorage:", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmark_search", JSON.stringify(searchInput));
  }, [searchInput]);

  const toggleTag = (text: string) => {
    setTags((prev) =>
      prev.map((tag) =>
        tag.text === text ? { ...tag, checked: !tag.checked } : tag
      )
    );
  };

  const changeFilter = (text: string) => {
    setFilters((prev) =>
      prev.map((filter) =>
        filter.text === text
          ? { ...filter, checked: true }
          : { ...filter, checked: false }
      )
    );
  };

  const resetTags = () => {
    setTags(tagsInitialState.map((t) => ({ ...t, checked: false })));
  };

  const resetFilters = () => {
    setFilters(
      filterInitialState.map((f) =>
        f.text === "Recently added"
          ? { ...f, checked: true }
          : { ...f, checked: false }
      )
    );
  };

  // useEffect(() => {
  //   console.log(filters);
  // }, []);

  return (
    <FilterContext.Provider
      value={{
        searchInput,
        setSearchInput,
        tags,
        toggleTag,
        resetTags,
        filters,
        changeFilter,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Hook: useTags
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useTags must be used within a TagsProvider");
  }
  return context;
};
