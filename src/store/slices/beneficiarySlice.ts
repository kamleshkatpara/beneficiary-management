import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Beneficiary } from "../../types/beneficiaryTypes";

interface BeneficiaryState {
  beneficiaries: Beneficiary[];
  nextId: number;
}

const initialState: BeneficiaryState = {
  beneficiaries: [],
  nextId: 1,
};

const beneficiarySlice = createSlice({
  name: "beneficiaries",
  initialState,
  reducers: {
    addBeneficiary: (state, action: PayloadAction<Beneficiary>) => {
      state.beneficiaries.push({
        ...action.payload,
        id: state.nextId,
      });
      state.nextId += 1;
    },
    updateBeneficiary: (state, action: PayloadAction<Beneficiary>) => {
      const index = state.beneficiaries.findIndex(
        (b) => b.id === action.payload.id
      );
      if (index !== -1) {
        state.beneficiaries[index] = action.payload;
      }
    },
    deleteBeneficiary: (state, action: PayloadAction<number>) => {
      state.beneficiaries = state.beneficiaries.filter(
        (b) => b.id !== action.payload
      );
    },
  },
});

export const { addBeneficiary, updateBeneficiary, deleteBeneficiary } =
  beneficiarySlice.actions;
export default beneficiarySlice.reducer;
