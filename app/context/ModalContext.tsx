"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ModalContextType {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  type: string | null;
  setType: Dispatch<SetStateAction<string | null>>;
  activeTags: string[];
  setActiveTags: Dispatch<SetStateAction<string[]>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [type, setType] = useState<string | null>(null);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  return (
    <ModalContext.Provider
      value={{
        isActive,
        setIsActive,
        type,
        setType,
        activeTags,
        setActiveTags,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useTags must be used within a TagsProvider");
  }
  return context;
};
