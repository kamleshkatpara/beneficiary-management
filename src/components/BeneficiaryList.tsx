import React, { lazy } from "react";
import "../styles/BeneficiaryList.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const BeneficiaryItem = lazy(() => import("./BeneficiaryItem"));

const BeneficiaryList: React.FC = () => {
  const { beneficiaries } = useSelector((state: RootState) => state.beneficiaries);
  const navigate = useNavigate();
  const headers =
    beneficiaries.length > 0
      ? ['#', ...Object.keys(beneficiaries[0]).filter(header => header !== "id"), '']
      : [];

  return (
    <div data-testid="beneficiary-list" className="beneficiary-list">
      <div className="beneficiary-header">
        {headers.map((header, index) => (
          <div key={index}>
            {header.charAt(0).toUpperCase() + header.slice(1)}
          </div>
        ))}
      </div>
      {beneficiaries.length === 0 ? (
        <div className="no-beneficiaries">No beneficiaries found.</div>
      ) : (
        beneficiaries.map((beneficiary, index) => (
          <BeneficiaryItem
            key={index}
            beneficiary={beneficiary}
            onDelete={() => navigate("/", { state: { showDeleteFlash: true } })}
          />
        ))
      )}
    </div>
  );
}

export default BeneficiaryList;
