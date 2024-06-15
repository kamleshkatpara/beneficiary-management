import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/BeneficiaryItem.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { deleteBeneficiary } from "../store/slices/beneficiarySlice";
import { Beneficiary } from "../types/beneficiaryTypes";

const BeneficiaryItem: React.FC<{
  beneficiary: Beneficiary;
  onDelete: (id: number) => void;
}> = ({ beneficiary, onDelete }) => {
  const { id, name, address, country, pincode } = beneficiary;

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => setShowModal(true);

  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(deleteBeneficiary(id));
    onDelete(id);
    setShowModal(false);
  };

  return (
    <>
      <div className="beneficiary-item">
        <div data-label="#">{id}</div>
        <div data-label="FullName">{name}</div>
        <div data-label="Address">{address}</div>
        <div data-label="Country">{country}</div>
        <div data-label="PinCode">{pincode}</div>
        <div className="actions" data-label="Actions">
          <Link to={`/edit/${id}`} title="Edit">
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          <Link to={"#"} onClick={handleDelete} title="Delete">
            <FontAwesomeIcon icon={faTrashCan} />
          </Link>
          <Link to={`/view/${id}`} title="View">
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
      </div>
      {showModal && (
        <Modal
          message="Are you sure you want to delete this beneficiary?"
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default BeneficiaryItem;
