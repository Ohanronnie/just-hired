import { INewGroup } from "@/interfaces/hr-intrerface";
import * as yup from "yup";

export const addNewGroupSchema: yup.ObjectSchema<INewGroup> = yup.object({
  groupName: yup.string().required("Group name is required"),
  teamLeader: yup.string().required("Team Leader is required"),
});
