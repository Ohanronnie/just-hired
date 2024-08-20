import { IAddNewuser } from "@/interfaces/add-userinterface";
import * as yup from "yup";

export const adduserSchema: yup.ObjectSchema<IAddNewuser> = yup.object({
  firstName: yup.string().required("First Name is required"),
  middleName: yup.string().optional(),
  lastName: yup.string().required("Last Name is required"),
  phoneNumber: yup
    .string()
    .matches(/^\+234\d{10}$/, "Phone Number must be valid")
    .required("Phone Number is required"),
  dateOfBirth: yup.date().required("Date of Birth is required"),
  gender: yup
    .string()
    .oneOf(["Male", "Female"], "Gender must be either Male or Female")
    .required("Gender is required"),
  maritalStatus: yup
    .string()
    .oneOf(
      ["Single", "Married", "Divorce"],
      "Marital Status must be either Single, Married, or Divorced",
    )
    .required("Marital Status is required"),
  emailAddress: yup
    .string()
    .email("Email Address must be a valid email")
    .required("Email Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  nationality: yup.string().required("Nationality is required"),
  detailAddress: yup.string().required("Detail Address is required"),
  role: yup
    .string()
    .oneOf(
      ["superAdmin", "admin", "officeAssistant", "teamLeader", "recruiter"],
      "Role must be one of the specified options",
    )
    .required("Role is required"),
  teamLeader: yup.string().optional(),
  status: yup
    .string()
    .oneOf(["Active", "Suspend"], "Status must be either Active or Suspend")
    .required("Status is required"),
  staffid: yup.string().optional(),
});
