import { ISuccess } from "./genericInterfaces";

export interface IAddEducationInterface {
  name: string;
  valueNumber: number;
}

export interface IBasicUser {
  basic_info: {
    firstname: string;
    lastname: string;
  };
  _id: string;
}

export interface ICreateEditExp {
  name: string;
  value: number;
  experienceid?: string;
}

export interface ISingleExperience {
  _id: string;
  value: string;
  name: string;
  createdBy: IBasicUser;
  createdAt: string;
}

export interface ISingleExpRes {
  data: ISingleExperience;
}

export interface IExpListRes extends ISuccess {
  data: ISingleExperience[];
}

export interface IEducationBody {
  name: string;
  value: number;
  educationid?: string;
}

export interface IEducationListResponse extends ISuccess {
  data: {
    _id: string;
    value: string;
    createdAt: string;
    createdBy: IBasicUser;
    editedAt: string;
    name: string;
    editedBy: IBasicUser | null;
  }[];
}

export interface ISingleEducationResponse extends ISuccess {
  data: {
    _id: string;
    value: string;
    createdAt: string;
    createdBy: IBasicUser;
    editedAt: string;
    editedBy: IBasicUser | null;
    name: string;
  };
}
