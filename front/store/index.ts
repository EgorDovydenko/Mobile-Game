import { atom } from "jotai";
import { UserModel } from "../types/user";

export const userAtom = atom<UserModel | undefined>(undefined);
export const stepAtom = atom<number>(0);
