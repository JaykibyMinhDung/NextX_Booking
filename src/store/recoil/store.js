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
  default: {
    branch_id: "",
    employee_id: "",
    date_time: "",
  },
});
export const getExtraServiceBooking = atom({
  key: "ExtraBooking",
  default: null,
});

// Booking GYym
export const getIdBranch = atom({
  key: "IdBranch",
  default: "",
});
export const getIdPT = atom({
  key: "iDPT",
  default: "",
});
export const getIdContract = atom({
  key: "contractsinfor",
  default: "",
});
export const OptionDate = atom({
  key: "DateBooking",
  default: "",
});

// State membership
export const ResetLoading = atom({
  key: "ResetLoading",
  default: false,
});
export const ResetState = atom({
  key: "ResetState",
  default: null,
});
export const PaymentDate = atom({
  key: "ResgisterBookingPT",
  default: "",
});

// account

export const DeleteAccountUser = atom({
  key: "Delete",
  default: "",
});

export const SwitchFaceId = atom({
  key: "FaceId",
  default: false,
});
