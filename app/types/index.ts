import { Timestamp } from "firebase/firestore";
import { JSX, ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface AsideLink {
  text: string;
  link: string;
  icon: JSX.Element;
}

export interface AsideTag {
  text: string;
  checked: boolean;
}

export interface SignUpTypeForm {
  fullname: string;
  email: string;
  password: string;
}
export interface SignInTypeForm {
  email: string;
  password: string;
}

export interface Bookmark {
  uid: string;
  title: string;
  url: string;
  favicon: string;
  description: string;
  tags: string[];
  pinned: boolean;
  whoPinned: string[];

  isArchived: boolean;
  whoArchived: string[];

  visitCount: number;
  createdAt: Timestamp | null;
  lastVisited: Timestamp | null;
  whoCreated: string | undefined;
}

export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  role: "admin" | "user";
}

export interface Form {
  title: string;
  url: string;
  description: string;
  tags: string[];
}
