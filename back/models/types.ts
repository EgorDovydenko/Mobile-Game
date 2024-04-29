import { WeaponsEnum } from "./constants";

export interface UserType {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  step: number;
  weapon: WeaponsEnum;
}
