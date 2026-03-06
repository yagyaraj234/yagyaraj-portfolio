"use client";
import useScrollProgress from "@/hooks/use-scroll-progress";

export default function TOC() {
  const { scrolled, remaining } = useScrollProgress();

  return <span>{remaining.toFixed(0)}%</span>;
}
