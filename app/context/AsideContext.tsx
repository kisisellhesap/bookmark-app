"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AsideContextType {
  asideIsActive: boolean;
  setAsideIsActive: Dispatch<SetStateAction<boolean>>;
}

const AsideContext = createContext<AsideContextType | undefined>(undefined);

export const AsideProvider = ({ children }: { children: ReactNode }) => {
  const [asideIsActive, setAsideIsActive] = useState<boolean>(false);
  return (
    <AsideContext.Provider value={{ asideIsActive, setAsideIsActive }}>
      {children}
    </AsideContext.Provider>
  );
};

export const useAside = () => {
  const context = useContext(AsideContext);
  if (!context) {
    throw new Error("useTags must be used within a TagsProvider");
  }
  return context;
};
