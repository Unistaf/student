import React from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import styled from "styled-components";

import "./modal.css"

const H6Pane = styled.h6`
  font-size: 20px;
  font-weight: 600;
`

function Modal({ opened, onClosed, title, children, modalWidth = 600 }) {
  const modalRef = useRef(null);

  if (!opened) {
    return null;
  }

  document.addEventListener("click", (e) => {
    if (e.target.className === "modal-container") {
      onClosed();
    }
  });

  return createPortal(
    <motion.div
      initial={{ opacity: 0, scale: .99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="modal-container"
    >
      <div
        style={{ width: `${modalWidth}px` }}
        className="modal-children"
        ref={modalRef}
      >
        <div className="modal-header">
          <H6Pane id="modal-title">{title ? title : "Modal Title"}</H6Pane>
          <div className="modal-close-icon" onClick={() => onClosed()}>
            <AiOutlineClose size={20} color={"rgba(17, 17, 167)"} />
          </div>
        </div>
        <div className="pb-3">{children}</div>
      </div>
    </motion.div>,
    document.getElementById("root")
  );
}

export default Modal;
