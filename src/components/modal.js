import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components/macro";

//React modal functionality sourced from Youtube tutorial by PedroTech (https://youtu.be/ZCvemsUfwPQ)

function Modal({ closeModal }) {
  return (
    <ModalBg className="modal-card">
      <h4 onClick={() => closeModal()} className="modal-close">
        X
      </h4>
      <h6>Thanks for the request, I'll play it as soon as I can!</h6>
    </ModalBg>
  );
}

const ModalBg = styled(motion.div)`
  position: absolute;
  display: flex;
  padding: 1rem;
  justify-content: center;
  border: 2px solid var(--green);
  align-items: center;
  background: #282828;
  width: 100%;
  height: 100%;
  z-index: 100;
  .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default Modal;
