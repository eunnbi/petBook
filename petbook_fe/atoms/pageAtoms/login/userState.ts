import { atom } from "recoil";

export const registerFormState = atom<{
  email: string;
  password: string;
  password_check?: string;
  nickname: string;
}>({
  key: "registerFormState",
  default: {
    email: "",
    password: "",
    nickname: "",
  },
});

export const registerFormCheckEmailState = atom<{
  userId: string;
}>({
  key: "registerFormCheckEmailState",
  default: {
    userId: "",
  },
});

export const CheckNicknameState = atom<{
  nickname: string;
}>({
  key: "CheckNicknameState",
  default: {
    nickname: "",
  },
});

export const loginFormState = atom<{
  email: string;
  password: string;
}>({
  key: "loginFormState",
  default: {
    email: "",
    password: "",
  },
});
