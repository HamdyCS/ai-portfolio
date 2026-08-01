import { atom } from "jotai";
import type { LanguageDirection } from "../types";

export const languageDirectionAtom = atom<LanguageDirection>("ltr");
