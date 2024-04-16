import { CommonErrorModel } from "../../../types/user";

export interface VaidationErrorModel extends CommonErrorModel {
  email?: string;
  password?: string;
  name?: string;
}

export interface UserEnterFormProps {
  isLogin: boolean;
}
