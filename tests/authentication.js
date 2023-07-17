import axios from "axios";

import { COOKIE_HOSCO_ACCESS_TOKEN, removeCookie } from "./cookies";

export const createAxiosInstance = (
  headers = [],
  base_url = "",
  response_headers = []
) => {
  const connect = axios.create({
    baseURL: base_url,
    timeout: 60000,
  });
  connect.interceptors.request.use(
    (config) => {
      headers.forEach((item) => {
        config.headers[item.type] = item.value;
      });
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
        removeCookie(COOKIE_HOSCO_ACCESS_TOKEN);
        window.location = "/auth/login";
      }
      return Promise.reject(error);
    }
  );
  return connect;
};
