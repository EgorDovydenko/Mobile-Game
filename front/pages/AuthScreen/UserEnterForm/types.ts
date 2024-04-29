import { CommonErrorModel } from "../../../types/user";
import { WithGetUser } from "../../types";

export interface ValidationErrorModel extends CommonErrorModel {
  email?: string;
  password?: string;
  name?: string;
}

export interface UserEnterFormProps extends WithGetUser {
  isLogin: boolean;
}
