import React from "react";
import { createPortal } from "react-dom";
// import PortalReactDOM from "react-dom";
import classes from "./modal.module.css";

// Tạo nền xám cho modal
const Backdrop = (props) => {
  const dataparents = props;
  return <div className={classes.backdrop} onClick={dataparents.onClose} />;
};
// Gói các component bên trong sẽ tạo ra một box thông báo
const ModalOverlay = (props) => {
  const dataparents = props;
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{dataparents.children}</div>
    </div>
  );
};

// Truy vấn đến id chứa overlay
const portalElement = document.getElementById("overlays");

// Tạo cấu hình cho modal (ModalOverlay) và overlays
const Popup = (props) => {
  const dataparents = props;
  return (
    <React.Fragment>
      {createPortal(<Backdrop onClose={dataparents.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{dataparents.children}</ModalOverlay>,
        portalElement
        // {props.children}
      )}
    </React.Fragment>
  );
};

export default Popup;
