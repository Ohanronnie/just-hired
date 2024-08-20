import { IAddCountryForm } from "@/interfaces/countryinterface";
import * as yup from "yup";

export const addCountrySchema: yup.ObjectSchema<IAddCountryForm> = yup.object({
  flag: yup.string().required("Country flag is required"),
  countryName: yup.string().required(),
  continent: yup.string().required(),
  additionalNote: yup.string().required(),
});

// Define the interface for the config
// interface IValidationConfig {
//     flag: boolean;
//     countryName: boolean;
//     continent: boolean;
//     additionalNote: boolean;
//   }

// // Function to dynamically generate the validation schema
// const createValidationSchema = (config: IValidationConfig): yup.ObjectSchema<IAddCountryForm> => {
//     const schemaFields: Record<keyof IAddCountryForm, yup.StringSchema<string | undefined>> = {
//       flag: config.flag ? yup.string().required('Country flag is required') : yup.string().optional(),
//       countryName: config.countryName ? yup.string().required() : yup.string().optional(),
//       continent: config.continent ? yup.string().required() : yup.string().optional(),
//       additionalNote: config.additionalNote ? yup.string().required() : yup.string().optional(),
//     };

//     return yup.object(schemaFields);
//   };
