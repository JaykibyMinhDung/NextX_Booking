import { atom } from "recoil";
export const isStoredJwt = () =>
  Boolean(JSON.parse(localStorage.getItem("tenant_packs"))); // Lấy token từ local, xác nhận có token ở local không
console.log(isStoredJwt());

export const token = atom({
  key: "auth_token",
  default: "",
});
export const isLogin = atom({
  key: "auth_login",
  default: false,
});
export const Logout = atom({
  key: "auth_logout",
  default: false,
});
export const resetPW = atom({
  key: "auth_resetPW",
  default: "",
});
