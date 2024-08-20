import { create } from "zustand";

interface ILayoutData {
  openedMenu: string;
  editOpenedmenu: (data: string) => void;
}

export const useSidebar = create<ILayoutData>((set) => ({
  openedMenu: "",
  editOpenedmenu: (menu) => {
    set((state) => {
      if (state.openedMenu === menu) {
        return { openedMenu: "" };
      }
      return { openedMenu: menu };
    });
  },
}));
