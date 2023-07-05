import connect from "../util/queryUrl";

const usename = "nextvision";

const password = "1a2s3dA!@#";

const tenant_code = "demox";

const usenameToken = "0902243822";

const passwordToken = "123456";

export const getToken = async () => {
  const { data } = await connect({
    method: "POST",
    url: "/api/gym-loyalty/login",
    data: {
      tenant_code: tenant_code,
      username: usenameToken,
      password: passwordToken,
    },
  });
  return data.data;
};

export const getBanner = async () => {
  const { data } = await connect({
    method: "GET",
    url: "api/gym-loyalty/broadcast/banner",
    auth: {
      username: usename,
      password: password,
    },
  });
  return data.data;
};

export const getContract = async () => {
  const tokenGYM = await getToken();
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/order",
    headers: {
      Authorization: "Bearer " + tokenGYM.token,
    },
  });
  return data.data;
};

export const postFeedback = async (values) => {
  const tokenGYM = await getToken();
  const { data } = await connect({
    method: "POST",
    url: "/api/gym-loyalty/member/ticket",
    data: values,
    headers: {
      Authorization: "Bearer " + tokenGYM.token,
    },
  });
  return data.message;
};

export const getFeedback = async () => {
  const tokenGYM = await getToken();
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/ticket",
    headers: {
      Authorization: "Bearer " + tokenGYM.token,
    },
  });
  return data.data;
};

export const getInbody = async () => {
  const tokenGYM = await getToken();
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/inbody?page=1&pageLimit=15",
    headers: {
      Authorization: "Bearer " + tokenGYM.token,
    },
  });
  return data.data;
};

export const getBranch = async () => {
  const tokenGYM = await getToken();
  const { data } = await connect({
    method: "GET",
    // url: "/api/gym-loyalty/member/tableprice?order_type=2&class_id=61&employee_id",
    url: "/api/gym-loyalty/member/tableprice",
    headers: {
      Authorization: "Bearer " + tokenGYM.token,
    },
  });
  return data;
};

export const getPreference = async () => {
  const tokenGYM = await getToken();
  const { data } = await connect({
    method: "GET",
    // url: "/api/gym-loyalty/member/tableprice?order_type=2&class_id=61&employee_id",
    url: "/api/gym-loyalty/member/voucher-enable",
    headers: {
      Authorization: "Bearer " + tokenGYM.token,
    },
  });
  return data.data;
};

export const getPersonalTrainer = async () => {
  const tokenGYM = await getToken();
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/list-pt?strSearch=",
    headers: {
      Authorization: "Bearer " + tokenGYM.token,
    },
  });
  return data.data;
};

export const getClass = async () => {
  const tokenGYM = await getToken();
  const { data } = await connect({
    method: "GET",
    // url: "/api/gym-loyalty/member/all-scheduler-booking-class",
    url: "/api/gym-loyalty/member/all-scheduler-booking-class",
    headers: {
      Authorization: "Bearer " + tokenGYM.token,
    },
  });
  return data.data;
};

export const getReserve = async () => {
  const tokenGYM = await getToken();
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/order-freeze",
    headers: {
      Authorization: "Bearer " + tokenGYM.token,
    },
  });
  return data.data;
};

export const getExtend = async () => {
  const tokenGYM = await getToken();
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/order-ext",
    headers: {
      Authorization: "Bearer " + tokenGYM.token,
    },
  });
  return data.data;
};

export const getBooking = async () => {
  const tokenGYM = await getToken();
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/booking-class-scheduler-booking",
    headers: {
      Authorization: "Bearer " + tokenGYM.token,
    },
  });
  return data.data;
};

export const getHistory = async () => {
  const tokenGYM = await getToken();
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/scheduler?pageLimit=10&page={{page}}&employee_id=24",
    headers: {
      Authorization: "Bearer " + tokenGYM.token,
    },
  });
  return data.data;
};
