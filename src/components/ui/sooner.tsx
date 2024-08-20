import { BadgeInfo } from "lucide-react";
import { Toaster as Toast } from "sonner";
import { SvgIcons } from "@/icons/SvgIconts";

function Toaster() {
  return (
    <Toast
      position="top-center"
      duration={10000}
      className="toaster group"
      icons={{
        success: <SvgIcons.SuccessCheck />,
        error: <SvgIcons.ErrorIcon />,
        info: <BadgeInfo className="mr-1 scale-75 opacity-75" />,
      }}
      toastOptions={{
        className: "rounded-2xl",
        classNames: {
          error: "bg-[#FCF5F6] border border-[#D62D2D]",
          success: "bg-[#F3FdF0] border border-green-500",
          info: "border",
        },
      }}
    />
  );
}

export default Toaster;
