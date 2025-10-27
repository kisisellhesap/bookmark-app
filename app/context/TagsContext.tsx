"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { AsideTag } from "../types";
import { tagsInitialState } from "../constant/tags";

interface TagsContextType {
  tags: AsideTag[];
  toggleTag: (text: string) => void;
  resetTags: () => void;
}

const TagsContext = createContext<TagsContextType | undefined>(undefined);

export const TagsProvider = ({ children }: { children: ReactNode }) => {
  const [tags, setTags] = useState<AsideTag[]>(tagsInitialState);

  const toggleTag = (text: string) => {
    setTags((prev) =>
      prev.map((tag) =>
        tag.text === text ? { ...tag, checked: !tag.checked } : tag
      )
    );
  };

  const resetTags = () => {
    setTags(tagsInitialState.map((t) => ({ ...t, checked: false })));
  };

  return (
    <TagsContext.Provider value={{ tags, toggleTag, resetTags }}>
      {children}
    </TagsContext.Provider>
  );
};

// Hook: useTags
export const useTags = () => {
  const context = useContext(TagsContext);
  if (!context) {
    throw new Error("useTags must be used within a TagsProvider");
  }
  return context;
};
