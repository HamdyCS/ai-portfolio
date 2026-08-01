import { atom } from "jotai";
import type { ProjectFilterType } from "../types";

export const projectFilterAtom = atom<ProjectFilterType>("all");
