import React from "react";
import {
  createPortal,
  //  render
} from "react-dom";
// import PortalReactDOM from "react-dom";
import classes from "./notifications.module.css";

// Tạo nền xám cho modal
const Backdrop1 = (props) => {
  const dataparents = props;
  return (
    <div className={classes.backdropNotifi} onClick={dataparents.onClose} />
  );
};
// Gói các component bên trong sẽ tạo ra một box thông báo
const ModalOverlay1 = (props) => {
  const dataparents = props;
  return (
    <div className={classes.modalNotifi}>
      <div className={classes.content}>{dataparents.children}</div>
    </div>
  );
};

// Truy vấn đến id chứa overlay
// const portalElementModal =

// Tạo cấu hình cho modal (ModalOverlay) và overlays
const PopupNotification = (props) => {
  const dataparents = props;
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop1 onClose={dataparents.onClose} />,
        document.getElementById("modal")
      )}
      {createPortal(
        <ModalOverlay1>{dataparents.children}</ModalOverlay1>,
        document.getElementById("modal")
        // {props.children}
      )}
    </React.Fragment>
  );
};

export default PopupNotification;
