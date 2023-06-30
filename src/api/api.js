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
