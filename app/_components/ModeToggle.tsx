'use client'
import { useCallback, useLayoutEffect } from "react";
import { Moon, Sun } from "./Icons";

const ModeToggle = () => {
  useLayoutEffect(() => {
    toggleDisplayMode("unchanged");
  })
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const toggleDisplayMode = useCallback((mode: "light" | "dark" | "system" | "unchanged") => {
    if (mode == "system") localStorage.removeItem("theme");
    if (mode == "dark") localStorage.theme = "dark";
    if (mode == "light") localStorage.theme = "light";

    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }, []);

  return (
    <div className="text-primary">
      <div className="hidden dark:inline-block" onClick={() => toggleDisplayMode("light")}>
        <Sun className="inline-block w-8 h-8" />
      </div>
      <div className="dark:hidden" onClick={() => toggleDisplayMode("dark")}>
        <Moon className="inline-block w-8 h-8" />
      </div>
    </div>
  )
}

export default ModeToggle;