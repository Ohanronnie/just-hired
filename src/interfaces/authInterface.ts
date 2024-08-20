import { ISuccess } from "./genericInterfaces";

export interface ISignInForm {
  email: string;
  password: string;
}

export interface IResetpassword {
  email: string;
}

export interface INewPassword {
  oldPassword: string;
  newPassword: string;
}

export interface IUserLoginRes extends ISuccess {
  data: {
    id: string;
    email: string;
    token: string;
  };
}

export interface IChangePasswordBody {
  password: string;
  token: string;
}

export interface IResetPasswordActivate {
  password: string;
  confirmPassword: string;
}

export type InputType = "password" | "email" | "text";
