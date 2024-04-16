import { WithStyle } from "../../../types/user";

export interface BaseButtonProps extends WithStyle {
  text: string;
  onClick: () => void;
}
