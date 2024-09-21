import React from "react";
import { createPortal } from "react-dom";
import "./AddAgentModalStyles.css";

const AddAgentModal = ({ children }) => {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal"),
  );
};

export default AddAgentModal;
