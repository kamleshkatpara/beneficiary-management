import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBeneficiary, updateBeneficiary } from "../store/slices/beneficiarySlice";
import { Beneficiary, BeneficiaryFormProps, FormValues } from "../types/beneficiaryTypes";
import { RootState } from "../store";
import Modal from "./Modal";
import "../styles/BeneficiaryForm.css";

const BeneficiaryForm: React.FC<BeneficiaryFormProps> = ({ isEditMode }) => {
  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      name: "",
      address: "",
      country: "",
      pincode: "",
    },
  });

  const [showModal, setShowModal] = useState(false);
  const countries = ["USA", "Canada", "India", "Australia", "Germany"];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { beneficiaries } = useSelector((state: RootState) => state.beneficiaries);

  useEffect(() => {
    if (isEditMode) {
      const beneficiary = beneficiaries.find((b) => b.id === parseInt(id ?? ""));
      if (beneficiary) {
        setValue("name", beneficiary.name);
        setValue("address", beneficiary.address);
        setValue("country", beneficiary.country);
        setValue("pincode", beneficiary.pincode);
      }
    }
  }, [isEditMode, id, beneficiaries, setValue]);

  const validateInput = (value: string) => {
    const isNotEmpty = /\S/.test(value);
    return isNotEmpty || "Field cannot be empty";
  };

  const validatePincode = (value: string) => {
    const isNumeric = /^\d+$/.test(value);
    const isNotEmpty = /\S/.test(value);
    if (!isNotEmpty) return "Pincode cannot be empty";
    if (!isNumeric) return "Pincode must be a number";
    const isValidLength = value.length >= 4 && value.length <= 6;
    return isValidLength || "Pincode must be between 4 and 6 digits";
  };

  const handleConfirm = () => {
    const data: Beneficiary = getValues();
    const parsedId = id ? parseInt(id) : 0;
    if (isEditMode) {
      const { id: _id, ...rest } = data;
      dispatch(updateBeneficiary({ id: parsedId, ...rest }));
      navigate("/", { state: { showEditFlash: true } });
    } else {
      dispatch(addBeneficiary(data));
      navigate("/", { state: { showAddFlash: true } });
    }
    setShowModal(false);
  };

  return (
    <div className="form-container">
      <h2>{isEditMode ? "Edit Beneficiary" : "Add Beneficiary"}</h2>
      <form onSubmit={handleSubmit(() => setShowModal(true))}>
        <label>
          Full Name:
          <input
            type="text"
            placeholder="Please enter First Name"
            {...register("name", {
              required: "Full Name is required",
              validate: validateInput,
            })}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </label>
        <label>
          Address:
          <input
            type="text"
            placeholder="Please enter Address"
            {...register("address", {
              required: "Address is required",
              validate: validateInput,
            })}
            className={errors.name ? "input-error" : ""}
          />
          {errors.address && <p className="error">{errors.address.message}</p>}
        </label>
        <label className="select-wrapper">
          Country:
          <select
            {...register("country", { required: "Country is required" })}
            className={errors.name ? "input-error" : ""}
            style={{ fontSize: 14, color: "grey" }}
          >
            {!isEditMode && (
              <option value="" disabled>
                Please select country
              </option>
            )}
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p className="error">{errors.country.message}</p>}
        </label>
        <label>
          PinCode:
          <input
            type="text"
            placeholder="Please enter PinCode"
            {...register("pincode", {
              required: "PinCode is required",
              validate: validatePincode,
            })}
            className={errors.name ? "input-error" : ""}
          />
          {errors.pincode && <p className="error">{errors.pincode.message}</p>}
        </label>
        <button type="submit">{isEditMode ? "Save" : "Submit"}</button>
      </form>
      {showModal && (
        <Modal
          message={`Are you sure you want to ${isEditMode ? "update" : "add"
            } the beneficiary?`}
          onConfirm={handleConfirm}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default BeneficiaryForm;
