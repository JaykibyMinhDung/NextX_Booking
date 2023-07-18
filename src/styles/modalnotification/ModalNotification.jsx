import React from "react";
import ReactDOM from "react-dom";
// import PortalReactDOM from "react-dom";
import classes from "./notifications.module.css";

// Tạo nền xám cho modal
const Backdrop = (props) => {
  const dataparents = props;
  return (
    <div className={classes.backdropNotifi} onClick={dataparents.onClose} />
  );
};
// Gói các component bên trong sẽ tạo ra một box thông báo
const ModalOverlay = (props) => {
  const dataparents = props;
  return (
    <div className={classes.modalNotifi}>
      <div className={classes.content}>{dataparents.children}</div>
    </div>
  );
};

// Truy vấn đến id chứa overlay
const portalElement = document.getElementById("overlays");

// Tạo cấu hình cho modal (ModalOverlay) và overlays
const PopupNotification = (props) => {
  const dataparents = props;
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={dataparents.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{dataparents.children}</ModalOverlay>,
        portalElement
        // {props.children}
      )}
    </React.Fragment>
  );
};

export default PopupNotification;
