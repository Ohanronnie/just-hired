import { HrRole } from "./hr-intrerface";

export interface IAddNewuser {
  firstName: string;
  middleName?: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  gender: string;
  maritalStatus: string;
  emailAddress: string;
  city: string;
  state: string;
  nationality: string;
  detailAddress: string;
  role: HrRole;
  teamLeader?: string;
  status: string;
  staffid?: string;
}
