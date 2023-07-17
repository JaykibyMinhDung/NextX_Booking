import axios from "axios";

// const apiUrl =

const connect = axios.create({
  baseURL: "https://api-nextcrm.nextcrm.vn/",
});

export default connect;

export const createAxiosInstance = (
  // headers = [],
  // base_url = "",
  response_headers = []
) => {
  connect.interceptors.request.use(
    (config) => {
      // const { origin } = new URL(config.url); // Tạo url mới từ url truyền trong axios
      // const allowedOrigins = [apiUrl]; // Cho phép mọi đường dẫn từ từ url này
      const accessToken = localStorage.getItem("tenant_packs"); // Lấy token từ local
      // if (allowedOrigins.includes(origin)) {
      // Nếu đường truyền khớp với allow thì sẽ truyền token vào
      config.headers.authorization = `Bearer ${accessToken}`; // set token vào để có thể truy cập vào api
      // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  connect.interceptors.response.use(
    (response) => {
      response_headers.forEach((item) => {
        response.headers[item.type] = item.value;
      });
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        window.location = "/auth/login";
      }
      return Promise.reject(error);
    }
  );
  return connect;
};

// export const createUrl = (endpoint) => new URL(endpoint, apiUrl).href; // endpoint từ server
export const setStoredJwt = (accessToken) =>
  localStorage.setItem("tenant_packs", accessToken);

// const apiUrl = "http://localhost:3000";
// const jwtKey = "accessToken";

// axios.interceptors.request.use(
//   (config) => {
//     const { origin } = new URL(config.url);
//     const allowedOrigins = [apiUrl];
//     const accessToken = localStorage.getItem(jwtKey);
//     if (allowedOrigins.includes(origin)) {
//       config.headers.authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
