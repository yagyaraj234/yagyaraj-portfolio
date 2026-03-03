"use client";
import { useEffect, useState } from "react";

function useScrollProgress() {
  const [scrollData, setScrollData] = useState({
    scrolled: 0,
    remaining: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolledPercent = (scrollTop / docHeight) * 100;
      const remainingPercent = 100 - scrolledPercent;

      setScrollData({
        scrolled: Math.min(scrolledPercent, 100),
        remaining: Math.max(remainingPercent, 0),
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollData;
}

export default useScrollProgress;
