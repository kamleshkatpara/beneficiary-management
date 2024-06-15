import React from 'react';
import "../styles/Modal.css";

interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}


const Modal: React.FC<ModalProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
