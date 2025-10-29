import { useState, useEffect } from "react";

export const useMobileScreen = (breakpoint = 1023) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export const useMiniScreen = (breakpoint = 640) => {
  const [isMini, setIsMini] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMini(window.innerWidth <= breakpoint);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMini;
};
