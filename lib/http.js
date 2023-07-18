// file này đẻ tham khảo

import axios from "axios";

const apiUrl = "http://localhost:3000"; // api của trang chủ
const jwtKey = "accessToken"; // giống token

// Trước khi truy cập sẽ phải chạy qua hàm này
axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url); // Tạo url mới từ url truyền trong axios
    const allowedOrigins = [apiUrl]; // Cho phép mọi đường dẫn từ từ url này
    const accessToken = localStorage.getItem(jwtKey); // Lấy token từ local
    if (allowedOrigins.includes(origin)) {
      // Nếu đường truyền khớp với allow thì sẽ truyền token vào
      config.headers.authorization = `Bearer ${accessToken}`; // set token vào để có thể truy cập vào api
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Trả lỗi cho console
  }
);

export const createUrl = (endpoint) => new URL(endpoint, apiUrl).href; // endpoint từ server
export const isStoredJwt = () => Boolean(localStorage.getItem(jwtKey)); // Lấy token từ local, xác nhận có token ở local không
export const setStoredJwt = (accessToken) =>
  localStorage.setItem(jwtKey, accessToken); // Lưu dưới dạng jwt token ở local

export const get = axios.get;
export const patch = axios.patch;
export const post = axios.post;
