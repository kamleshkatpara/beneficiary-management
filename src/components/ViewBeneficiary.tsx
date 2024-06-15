import { useParams } from "react-router-dom";
import "../styles/ViewBeneficiary.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Beneficiary } from "../types/beneficiaryTypes";

function ViewBeneficiary() {
  const { id: idString } = useParams<{ id: string }>();
  const id = parseInt(idString || "");

  const { beneficiaries } = useSelector((state: RootState) => state.beneficiaries);
  const beneficiary = beneficiaries.find((b: Beneficiary) => b.id === id);

  return (
    <div className="beneficiary-details">
      <h2 style={{ textAlign: "center" }}>View Beneficiary</h2>
      {beneficiary ? (
        <div className="beneficiary-table">
          <div className="beneficiary-row">
            <div className="label">FullName:</div>
            <div className="value">{beneficiary.name}</div>
          </div>
          <div className="beneficiary-row">
            <div className="label">Address:</div>
            <div className="value">{beneficiary.address}</div>
          </div>
          <div className="beneficiary-row">
            <div className="label">Country:</div>
            <div className="value">{beneficiary.country}</div>
          </div>
          <div className="beneficiary-row">
            <div className="label">PinCode:</div>
            <div className="value">{beneficiary.pincode}</div>
          </div>
        </div>
      ) : (
        <p>Beneficiary not found</p>
      )}
    </div>
  );
}

export default ViewBeneficiary;
