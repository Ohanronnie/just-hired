export interface IDynamicForm {
  name: boolean;
  fullName: boolean;
  email: boolean;
  phoneNumber: boolean;
  dateOfBirth: boolean;
  maritalStatus: boolean;
  currentLocation: boolean;
  gender: boolean;
  city: boolean;
  otterFields: boolean;
  educationalQualification: boolean;
  bpoAccountAndExperience: boolean;
  qualifications: boolean;
  course: boolean;
  resume: boolean;
  expectedSalary: boolean;
}

export interface IFormOutPut {
  name: boolean;
  fullName: boolean;
  email: boolean;
  phoneNumber: boolean;
  dateOfBirth: boolean;
  maritalStatus: boolean | IFormSelectOptions;
  currentLocation: boolean | ISingleLocation;
  gender: boolean | IFormSelectOptions;
  otterFields: boolean | IOtterFields;
  city: boolean;
  educationalQualification: boolean;
  bpoAccountAndExperience: boolean | IFormSelectOptions;
  qualifications: boolean | IFormSelectOptions;
  course: boolean;
  resume: boolean | { status: boolean; required: boolean };
  expectedSalary: boolean;
}

interface IFormSelectOptions {
  status: boolean;
  options: string[];
  note: string | null;
}
export interface ISingleLocation {
  location: string;
  company: string;
}

export interface IOtterFields {
  saleExperience: boolean;
  technicalExperience: boolean;
  travelExperience: boolean;
}

export interface DynamicSelectFields {
  qualifications: string[];
  gender: string[];
  maritalStatus: string[];
}

export interface IDynamicExtendedFields extends DynamicSelectFields {
  bpoAccountAndExperience: string[];
}

export interface IOtterQuestions {
  question: string;
  otterField: keyof IOtterFields;
}
