import { IAddEducationInterface } from "@/interfaces/experience-interface";
import * as yup from "yup";

export const addEducationSchema: yup.ObjectSchema<IAddEducationInterface> =
  yup.object({
    name: yup.string().required("Experience name is required"),
    valueNumber: yup
      .number()
      .typeError("Value must be a number")
      .required("Value is required"),
  });
