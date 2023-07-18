// File này tham khảo code của anh Duy, đã áp dụng thành công trong dự án này

import axios from "axios";

import { COOKIE_HOSCO_ACCESS_TOKEN, removeCookie } from "./cookies"; // Anh lưu dữ liệu cookie của web

// Hàm này để tạo api và lọc các dữ liệu sai, ngoài ra còn giúp thêm một số hàm bị lặp lại ở api
export const createAxiosInstance = (
  headers = [],
  base_url = "",
  response_headers = []
) => {
  // Tạo base api để rút ngắn việc gõ lặp lại đường dẫn
  const connect = axios.create({
    baseURL: base_url,
    timeout: 60000,
  });
  // Cái này để thêm các trường hoặc các cấu hình trước khi gửi
  connect.interceptors.request.use(
    (config) => {
      // headers này sẽ là tham số chuyển vào từ react query hoặc submit
      headers.forEach((item) => {
        config.headers[item.type] = item.value;
      });
      return config; // Trả về base api sau đã cấu hình xong
    },
    (error) => {
      return Promise.reject(error); // Nếu có lỗi sẽ trả lại ra console.log
    }
  );

  //  Phần này sẽ chỉnh cấu hình sau khi trả về, ví dụ như lấy message riêng hoặc ẩn payload
  connect.interceptors.response.use(
    (response) => {
      response_headers.forEach((item) => {
        response.headers[item.type] = item.value;
      });
      return response; // Trả lại phản hồi đã chỉnh sửa hoặc lọc
    },
    // Mọi lỗi lầm sau khi phản hồi sẽ được ném vào đây
    (error) => {
      if (error.response?.status === 401) {
        removeCookie(COOKIE_HOSCO_ACCESS_TOKEN);
        window.location = "/auth/login"; // Chuyển lại về trang mình muốn hiển thị cho người dùng
      }
      return Promise.reject(error);
    }
  );
  return connect;
};
