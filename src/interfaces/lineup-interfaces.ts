export interface ILineUpFirst {
  company: string;
  location: string;
  email: string;
}

export interface ILineUpForm extends ILineUpFirst {
  firstName: string;
  middleName?: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  maritalStatus: string;
  currentLocation: string;
  gender: string;
  city: string;
  educationalQualifications: string;
  bpoAccount: string;
  bpoExperience: string;
  courseOfStudy: string;
  resume: string;
  lineUpStatus: string;
}
