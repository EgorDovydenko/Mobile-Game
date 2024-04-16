import { StyleProp, ViewStyle } from "react-native";

export interface UserModel {
  id: number;
  email: string;
  name: string;
  token: string;
  step: number;
}

export interface CommonErrorModel {
  unknown: string;
  message?: string;
}

export interface WithStyle {
  style?: StyleProp<ViewStyle>;
}
