import { ILineUpFirst, ILineUpForm } from "@/interfaces/lineup-interfaces";
import * as yup from "yup";

export const addLineUpPopupSchema: yup.ObjectSchema<ILineUpFirst> = yup.object({
  company: yup.string().required("Company name is required"),
  location: yup.string().required("Company name is required"),
  email: yup.string().email().required("email is required"),
});

export const lineUpFormSchema: yup.ObjectSchema<ILineUpForm> = yup.object({
  company: yup.string().required("Company name is required"),
  location: yup.string().required("Location is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  firstName: yup.string().required("First name is required"),
  middleName: yup.string().optional(),
  lastName: yup.string().required("Last name is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .required("Phone number is required"),
  dateOfBirth: yup.date().required("Date of birth is required"),
  maritalStatus: yup
    .string()
    .oneOf(["single", "married", "divorced", "widowed"])
    .required("Marital status is required"),
  currentLocation: yup.string().required("Current location is required"),
  gender: yup
    .string()
    .oneOf(["Male", "Female", "Other"])
    .required("Gender is required"),
  city: yup.string().required("City is required"),
  educationalQualifications: yup
    .string()
    .required("Educational qualifications are required"),
  bpoAccount: yup.string().required("BPO account is required"),
  bpoExperience: yup.string().required("BPO experience is required"),
  courseOfStudy: yup.string().required("Course of study is required"),
  resume: yup.string().required("Resume is required"),
  lineUpStatus: yup.string().required("Line-up status is required"),
});
