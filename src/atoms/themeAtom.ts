import { atom } from "jotai";

const themeAtom = atom<"dark" | "light">(
  localStorage.getItem("theme") === "dark" ? "dark" : "light",
);

export default themeAtom;
