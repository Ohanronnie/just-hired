import { create } from "zustand";
import { HrRole, HrStatus } from "@/interfaces/hr-intrerface";
// import { HrStatusFilter,HrRoleFilter } from "@/static/hr-static";

interface IuseFormFilter {
  page: number;
  increasePage: () => void;
  reducePage: () => void;
  role: HrRole[];
  hrStatus: HrStatus[];
  setHrStatus: (role: HrStatus[]) => void;
  setRole: (type: HrRole[]) => void;
  date: null | string;
  setDate: (date: string | null) => void;
  jumpToPage: (page: number) => void;
}

export const useFormFilter = create<IuseFormFilter>((set) => ({
  page: 1,
  jumpToPage: (page) => {
    set(() => ({
      page,
    }));
  },
  increasePage: () => {
    set((state) => ({
      page: state.page + 1,
    }));
  },
  reducePage: () => {
    set((state) => ({
      page: state.page - 1,
    }));
  },
  role: [],
  setRole: (role) => {
    set(() => ({
      role: role,
    }));
  },
  hrStatus: [],
  setHrStatus: (hrStatus) => {
    set({ hrStatus });
  },
  date: null,
  setDate: (date) => {
    set(() => {
      return { date };
    });
  },
}));
