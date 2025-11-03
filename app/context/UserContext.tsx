"use client";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { auth } from "../firebase";
import { getUsersMethod } from "../firebase/allMethod";
import { UserType } from "../types";

interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  loading: boolean;
  users: UserType[] | null;
  setUsers: Dispatch<SetStateAction<UserType[] | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setloading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserType[] | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setloading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const usersFetch = await getUsersMethod();
      setUsers(usersFetch);
    };

    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useTags must be used within a TagsProvider");
  }
  return context;
};
