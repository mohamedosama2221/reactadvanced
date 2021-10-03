import React, { useEffect } from "react";

const Modal = (props) => {
  const { modalContent, handleModel } = props;
  useEffect(() => {
    setTimeout(() => {
      handleModel();
    }, 1000);
  }, []);
  return <div className="modal">{modalContent}</div>;
};

export default Modal;
