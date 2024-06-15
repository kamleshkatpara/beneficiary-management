export interface Beneficiary {
  id: number;
  name: string;
  address: string;
  country: string;
  pincode: string;
}

export interface FormValues extends Beneficiary {}

export interface BeneficiaryFormProps {
  isEditMode: boolean;
}
