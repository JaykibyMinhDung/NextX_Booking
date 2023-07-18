import axios from "axios";

// const apiUrl =

// export default connect;

const connect = axios.create({
  baseURL: "https://api-nextcrm.nextcrm.vn/",
});

connect.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(localStorage.getItem("tenant_packs")); // Lấy token từ local
    // console.log(accessToken);
    config.headers["Authorization"] = `Bearer ${accessToken}`; // set token vào để có thể truy cập vào api
    return config;
  },
  (error) => {
    return Promise.reject(error); // Trả lỗi cho console
  }
);

// const connect = (
//   // headers = [],
//   // base_url = "",
//   response_headers = []
// ) => {
//   const connecttest = axios.create({
//     baseURL: "https://api-nextcrm.nextcrm.vn/",
//   });
//   // Trước khi request sẽ làm gì
//   connecttest.interceptors.request.use(
//     (config) => {
//       // const { origin } = new URL(config.url); // Tạo url mới từ url truyền trong axios
//       // const allowedOrigins = [apiUrl]; // Cho phép mọi đường dẫn từ từ url này
//       const accessToken = JSON.parse(localStorage.getItem("tenant_packs")); // Lấy token từ local
//       console.log(accessToken);
//       // if (allowedOrigins.includes(origin)) {
//       // Nếu đường truyền khớp với allow thì sẽ truyền token vào
//       config.headers.authorization = `Bearer ${accessToken}`; // set token vào để có thể truy cập vào api
//       // }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );
//   //  response trả về sẽ làm gì
//   connecttest.interceptors.response.use(
//     (response) => {
//       response_headers.forEach((item) => {
//         response.headers[item.type] = item.value;
//       });
//       return response;
//     },
//     (error) => {
//       if (error.response?.status === 401) {
//         window.location = "/homelogin";
//       }
//       return Promise.reject(error);
//     }
//   );
//   return connecttest;
// };

export default connect;
// export const createUrl = (endpoint) => new URL(endpoint, apiUrl).href; // endpoint từ server
export const setStoredJwt = (accessToken) =>
  localStorage.setItem("tenant_packs", JSON.stringify(accessToken));

export const setUsers = (me) => localStorage.setItem("me", JSON.stringify(me));

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
