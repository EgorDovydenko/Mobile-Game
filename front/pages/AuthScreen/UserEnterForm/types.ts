import { CommonErrorModel } from "../../../types/user";

export interface ValidationErrorModel extends CommonErrorModel {
  email?: string;
  password?: string;
  name?: string;
}

export interface UserEnterFormProps {
  isLogin: boolean;
}
