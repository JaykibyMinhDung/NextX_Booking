import axios from "axios";

const connect = axios.create({
  baseURL: "https://api-nextcrm.nextcrm.vn/",
});

export default connect;

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
