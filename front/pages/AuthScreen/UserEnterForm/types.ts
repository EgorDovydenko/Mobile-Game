import { CommonErrorModel } from "../../../types/user";
import { WithSetStep } from "../../types";

export interface VaidationErrorModel extends CommonErrorModel {
  email?: string;
  password?: string;
  name?: string;
}

export interface UserEnterFormProps extends WithSetStep {
  isLogin: boolean;
}
