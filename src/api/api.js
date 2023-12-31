import connect from "../util/queryUrl";
// import { useRecoilValue } from "recoil";
import { setStoredJwt, setUsers } from "../util/queryUrl";

const usename = "nextvision";

const password = "1a2s3dA!@#";

// const tenant_code = "demox";

// const usenameToken = "0902243822";

// const passwordToken = "123456";

// login
export const getToken = async (values) => {
  const { data } = await connect({
    method: "POST",
    url: "/api/gym-loyalty/login",
    data: values,
  }).catch((err) => console.log(err));
  if (data?.data.length < 1) {
    return data?.meta;
  }
  const results = (await data?.data) ? setStoredJwt(data.data?.token) : null;
  // const token = (await results) === undefined ? data?.data : data?.meta;
  const token = (await results) === undefined ? data?.data : null;
  setUsers(data?.data.user);
  return token;
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

// GET API

export const getContract = async () => {
  // const tokenData2 = JSON.parse(localStorage.getItem("tenant_packs"));
  // const testM = tokenData2.data;
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/order",
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const postFeedback = async (values) => {
  const { data } = await connect({
    method: "POST",
    url: "/api/gym-loyalty/member/ticket",
    data: values,
  });
  return data;
};

export const getFeedback = async () => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/ticket",
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getInbody = async () => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/inbody?page=1&pageLimit=15",
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getBranch = async (props) => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    // url: "/api/gym-loyalty/member/tableprice?order_type=2&class_id=61&employee_id",
    url: `/api/gym-loyalty/member/tableprice?${
      props.branch_id ? "branches[]=" + props.branch_id : ""
    }${
      props.order_type
        ? "order_type=" + props.order_type + "&"
        : "order_type=" + "0" + "&"
    }${props.class_id ? "class_id=" + props.class_id : ""}${
      props.employee_id ? "employee_id=" + props.employee_id : ""
    }`,
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data;
};

export const getPreference = async () => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    // url: "/api/gym-loyalty/member/tableprice?order_type=2&class_id=61&employee_id",
    url: "/api/gym-loyalty/member/voucher-enable",
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const postPreference = async () => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "POST",
    // url: "/api/gym-loyalty/member/voucher-enable",
    url: "/api/gym-loyalty/member/release-voucher",
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getUserPreference = async () => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/voucher-saved?branches[]=1",
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getPersonalTrainer = async () => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/list-pt?strSearch=",
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getClass = async (date) => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    // url: "/api/gym-loyalty/member/all-scheduler-booking-class",
    url: `/api/gym-loyalty/member/all-scheduler-booking-class${
      date ? "?begin_date=" + date : ""
    }`,
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getReserve = async () => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/order-freeze",
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data;
};

export const getExtend = async () => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/order-ext",
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data;
};

export const getBooking = async () => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: "/api/gym-loyalty/member/booking-class-scheduler-booking",
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getHistory = async () => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    // url: "/api/gym-loyalty/member/scheduler?pageLimit=10&page={{page}}&employee_id=24",
    // url: "/api/gym-loyalty/member/scheduler?pageLimit=10&page={{page}}",
    url: "/api/gym-loyalty/member/register-order",
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getCheckin = async (order_id) => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    // url: "/api/gym-loyalty/member/checkin-checkout",
    url: `api/checkin-checkout/daily?page=1&pageLimit=15&search[gym_daily.order_id]=${order_id}`,

    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};
export const getCheckinPT = async () => {
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: `api/gym-loyalty/member/checkin-checkout/PT`,

    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};
export const postRatingCheckinPT = async (post) => {
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "POST",
    url: `api/gym-loyalty/member/checkin-pt/rate`,
    data: post,
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.message;
};

export const getTimeTables = async (id) => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: `/api/order/order/${id}`,
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getLogContractBooking = async (id) => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    // url: "/api/gym-loyalty/member/register-order",
    url: `/api/gym-loyalty/member/scheduler?pageLimit=15&page={{page}}${
      id ? `&employee_id=${id}` : ""
    }`,
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

// Booking PT schedule

export const getBookingPTContract = async (id) => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: `/api/gym-loyalty/member/order-to-book-pt${
      id ? "?branch_checkin_id=" + id : ""
    }`,
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getBookingPTBranch = async () => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: `api/gym-loyalty/member/list-branch`,
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getBookingPTListPT = async (idOrder, idBranch) => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: `/api/gym-loyalty/member/list-pt-order?${
      idOrder ? "order_id=" + idOrder + "&" : ""
    } ${idBranch ? "branch_id=" + idBranch : ""}`,
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getBookingPTServiceExtra = async () => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "GET",
    url: `api/gym-loyalty/member/list-book-pt-task`,
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
  });
  return data.data;
};

export const getBookingPTScheduleHours = async (post) => {
  const { employee_id, branch_id, date_time } = post;
  const { data } = await connect({
    method: "GET",
    url: `/api/gym-loyalty/member/scheduler-pt?${
      employee_id ? "employee_id=" + employee_id + "&" : ""
    }${branch_id ? "branch_id=" + branch_id + "&" : ""}${
      date_time ? "date_time=" + date_time : ""
    }`,
  });
  return data.data;
};

// POST API

export const postBookingPersonalTrainer = async (form) => {
  // const tokenGYM = await getToken();
  // if (!tokenGYM) {
  //   return { error: "Please login" };
  // }
  const { data } = await connect({
    method: "POST",
    // url: "/api/gym-loyalty/member/register-order",
    url: `/api/gym-loyalty/member/booking-pt`,
    // headers: {
    //   Authorization: "Bearer " + tokenGYM.token,
    // },
    data: form,
  });
  return data;
};

export const postRegisterMember = async (post) => {
  const { data } = await connect({
    method: "POST",
    url: `api/gym-loyalty/member/register-order`,
    data: post,
  });
  return data;
};

export const postDeleteAccount = async (post) => {
  const { data } = await connect({
    method: "POST",
    url: `api/gym-loyalty/member/delete-account`,
    data: { password: post },
  });
  return data;
};

// Delete api

export const deleteBookingYoga = async (id) => {
  const { data } = await connect({
    method: "DELETE",
    url: `/api/gym-loyalty/member/booking-class/${id}`,
  });
  return data;
};

export const deleteBookingPT = async (id) => {
  const { data } = await connect({
    method: "DELETE",
    url: `/api/gym-loyalty/member/booking-pt/${id}`,
  });
  return data;
};

export const postBookingYoga = async (post) => {
  const { data } = await connect({
    method: "POST",
    url: `/api/gym-loyalty/member/booking-class`,
    data: post,
  });
  return data;
};

// export const postBookingPTCalendar = async (post) => {
//   const { data } = await connect({
//     method: "POST",
//     url: `/api/gym-loyalty/member/appointment`,
//     data: post,
//   });
//   return data;
// };

export const getDetailBookingYoga = async (id) => {
  const { data } = await connect({
    method: "GET",
    url: `/api/gym-loyalty/member/booking-class/${id}`,
  });
  return data;
};

export const getDetailBooking = async (id) => {
  const { data } = await connect({
    method: "GET",
    url: `/api/gym-loyalty/member/booking-pt/${id}`,
  });
  return data;
};
