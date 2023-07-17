import { createUrl, get, isStoredJwt, post, setStoredJwt } from "./http";

export const me = async () => {
  return isStoredJwt()
    ? (await get(createUrl("/api/me")).catch(() => null))?.data // nếu true trả về dữ liệu server gửi về
    : null; // Nếu trống không chạy hàm me
};

// api login
export const login = async (username, password) => {
  const result = (
    await post(createUrl("/api/login"), { username, password }).catch(
      () => null
    )
  )?.data; // nếu có dữ liệu trả về data

  if (!result) {
    return alert("Could not login");
  }
  setStoredJwt(result.accessToken); // chạy hàm để lưu token
  return me(); // hàm me sẽ nhận dữ liệu từ local để truy cập vào api me
};

export const signup = async (username, password) => {
  const result = (
    await post(createUrl("/api/signup"), { username, password }).catch(
      () => null
    )
  )?.data;

  if (!result) {
    return alert("Could not sign up");
  }
  setStoredJwt(result.accessToken);
  return me();
};
