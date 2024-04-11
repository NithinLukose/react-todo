import React, { ReactNode } from "react";
import { ModalOverLay, ModalContainer, ModalHeader } from "./styles";

interface props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal: React.FC<props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverLay>
      <ModalContainer>
        <ModalHeader>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </ModalHeader>
        {children}
      </ModalContainer>
    </ModalOverLay>
  );
};

export default Modal;
