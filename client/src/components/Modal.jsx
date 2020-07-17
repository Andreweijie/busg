import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const modalRoot = document.getElementById("modal-root");
library.add(faTimesCircle);

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "none"
      }}
    >
      <div
        id="modal-pop"
        style={{
          padding: 20,
          background: "none",
          borderRadius: "2px",
          display: "inline-block",
          minHeight: "300px",
          position: "relative",
          maxWidth: "900px",
          width: "100vw",
          justifySelf: "center",
          height: "1000px"
        }}
      >
        <div id="btndiv">
          <button
            id="close-btn"
            onClick={props.onClose}
            style={{
              backgroundColor: "white",
              border: "none",
              color: "white",
              borderRadius: "50%",
              height: "2em",
              width: "2em",
              fontSize: "2em",
              alignSelf: "center",
              boxShadow: "0rem 0.3rem 1.375rem 0rgba(78, 98, 117, 0.3)"
            }}
          >
            <FontAwesomeIcon className="icon" icon="times-circle" />
          </button>
        </div>

        {props.children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
