import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  render() {
    return this.props.open
      ? ReactDOM.createPortal(
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
                margin: "1rem",
                position: "relative",
                minWidth: "300px",
                width: "400px",
                justifySelf: "center",
                height: "1000px"
              }}
            >
              {this.props.children}
              <hr />
            </div>
          </div>,
          modalRoot
        )
      : null;
  }
}

export default Modal;
