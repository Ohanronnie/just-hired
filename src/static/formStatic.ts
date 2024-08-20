import {
  DynamicSelectFields,
  IDynamicExtendedFields,
  IDynamicForm,
  IOtterFields,
  IOtterQuestions,
} from "@/interfaces/form-interface";

export const DynamicFormDefault: DynamicSelectFields = {
  qualifications: ["0", "6", "1", "7", "3", "8", "4", "9", "5", "10"],
  gender: ["Male", "Female", "Prefer not to say"],
  maritalStatus: ["Single", "Married", "Divorced"],
};

export const maritalStatusDefault = [
  "Single",
  "Married",
  "Divorced",
  "Widowed",
  "Separated",
  "Registered Partners",
  "Others",
];
export const genderDefault = ["Male", "Female", "Prefer not to say"];

export const DynamicSelectDefault: IDynamicExtendedFields = {
  qualifications: [],
  gender: [],
  maritalStatus: [],
  bpoAccountAndExperience: [],
};

export const DynamicDefault: IDynamicForm = {
  name: false,
  fullName: false,
  email: false,
  phoneNumber: false,
  dateOfBirth: false,
  maritalStatus: false,
  currentLocation: false,
  gender: false,
  city: false,
  otterFields: false,
  educationalQualification: false,
  bpoAccountAndExperience: false,
  resume: false,
  course: false,
  qualifications: false,
  expectedSalary: false,
};
export const otterFieldDefault: IOtterFields = {
  saleExperience: false,
  technicalExperience: false,
  travelExperience: false,
};

export const otterQuestions: IOtterQuestions[] = [
  {
    question: "Do you have sale experience?",
    otterField: "saleExperience",
  },
  {
    question: "Do you have Technical Experience?",
    otterField: "technicalExperience",
  },
  {
    question: "Do you have Travel experience?",
    otterField: "travelExperience",
  },
];
