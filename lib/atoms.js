import { atomWithStorage } from "jotai/utils";

export const wrongAnswerListAtom = atomWithStorage("wrongAnswerList", []);

export const numPuzzlesTodayAtom = atomWithStorage("numPuzzlesToday", 0);
