// token
import { atom } from "recoil";

export const receiveMembership = atom({
  key: "membership",
  default: "",
});

export const receiveAllmembership = atom({
  key: "allmembership",
  default: "",
});
export const titleBranchStore = atom({
  key: "titleBranch",
  default: "",
});
export const updatedDateClass = atom({
  key: "dateClass",
  default: "",
});
export const BookingClassPayment = atom({
  key: "BookingClass",
  default: "",
});
export const BookingPTPayment = atom({
  key: "BookingPersonalTrainer",
  default: "",
});
export const ChanngeBackGroundColor = atom({
  key: "changebackground",
  default: false,
});
export const ChanngeBackGroundColorButtonDay = atom({
  key: "changebackgroundButtonDay",
  default: null,
});
export const DataPopupBookingPT = atom({
  key: "PopupBooking",
  default: null,
});
export const DataPopupBookingBranch = atom({
  key: "PopupBookingBranch",
  default: null,
});
export const DataPopupBookingContract = atom({
  key: "PopupBookingContract",
  default: null,
});
export const DataPopupBookingPersolnaltrainer = atom({
  key: "PopupBookingPT",
  default: null,
});
export const DataPaymentPreference = atom({
  key: "PreferenceBill",
  default: null,
});
export const DataPaymentVoucher = atom({
  key: "Voucher",
  default: null,
});
export const getFormBookingPT = atom({
  key: "FormResgiterBooking",
  default: null,
});
