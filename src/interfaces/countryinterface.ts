import { IBasicUser } from "./experience-interface";
import { ISuccess } from "./genericInterfaces";

export interface IAddCountryForm {
  flag: string;
  countryName: string;
  continent: string;
  additionalNote: string;
}

export interface ICountryBody {
  countryid?: string;
  name: string;
  continent: string;
  flag: string;
  note: string;
}

export interface ISingleCountry {
  _id: string;
  name: string;
  continent: string;
  note: string;
  flag: string;
  createdBy: string;
  editedAt: string;
  editedBy: IBasicUser | null;
  createdAt: string;
}

export interface ICountryRes extends ISuccess {
  data: ISingleCountry[];
}

export interface ISingleCountryRes extends ISuccess {
  data: ISingleCountry;
}
