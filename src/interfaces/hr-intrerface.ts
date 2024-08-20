export type HrRole =
  | "superAdmin"
  | "admin"
  | "teamLeader"
  | "recruiter"
  | "officeAssistant";

export type HrStatus = "Active" | "Suspended";

export interface INewGroup {
  groupName: string;
  teamLeader: string;
}

export interface ISuccess {
  status_code: 200;
  status: true;
  message: string;
}

// interface IRecruiter {
//   recruiter_active: string;
//   teamleader: string;
// }

// interface IBasicInfo {
//   email: string;
//   password: string;
//   firstname: string;
//   middlename?: string;  // Optional, as not all objects have this property
//   lastname: string;
//   photo: string;
//   phone: string;
//   dob: string;
//   gender?: string;  // Optional, as not all objects have this property
// }

// interface IAddressDetails {
//   address: string;
//   city: string;
//   state: string;
//   nationality: string;
// }

// interface IAdministrative {
//   role: HrRole;
//   status: string;
//   teamleader?: string;  // Optional, as not all objects have this property
// }

// interface IDataItem {
//   recruiter: IRecruiter;
//   _id: string;
//   email?: string;
//   password?: string;
//   firstname?: string;
//   lastname?: string;
//   photo?: string;
//   address?: string;
//   phone?: string;
//   dob?: string;
//   createdAt: string;
//   __v: number;
//   basic_info?: IBasicInfo;
//   address_details?: IAddressDetails;
//   administrative?: IAdministrative;
// }

export interface IUser {
  lastname: string;
  firstname: string;
  email: string;
  password?: string;
  address: string;
  photo?: string;
  dob: string;
  phone: string;
  teamleader?: string;
  status?: string;
  role?: string;
  nationality: string;
  state: string;
  city: string;
  gender: string;
  middlename?: string;
  recruiter_active: string;
  maritalstatus: string;
  staffid?: string;
}

interface BasicInfo {
  email: string;
  password: string;
  firstname: string;
  middlename: string;
  lastname: string;
  photo?: string;
  phone: string;
  dob: string;
  gender: string;
  maritalstatus: string;
}

interface AddressDetails {
  address: string;
  city: string;
  state: string;
  nationality: string;
}

interface Administrative {
  role: HrRole;
  status: string;
}

interface Recruiter {
  recruiter_active: string;
  teamleader: string;
}

export interface IUserRes {
  basic_info: BasicInfo;
  address_details: AddressDetails;
  administrative: Administrative;
  recruiter: Recruiter;
  _id: string;
  createdAt: string;
  __v: number;
}

export interface IAllAdminRes extends ISuccess {
  data: IUserRes[];
}

export interface ISingleAdminRes extends ISuccess {
  data: IUserRes;
}
