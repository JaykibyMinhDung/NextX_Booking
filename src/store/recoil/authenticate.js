import { atom } from "recoil";

export const Logout = atom({
  key: "auth_logout",
  default: false,
});
export const token = atom({
  key: "auth_token",
  default: "",
});
export const resetPW = atom({
  key: "auth_resetPW",
  default: "",
});
