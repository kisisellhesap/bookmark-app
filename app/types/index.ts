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
