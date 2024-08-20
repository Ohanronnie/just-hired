import CloseToast from "@/components/global/CloseToast";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const usePostErrors = () => {
  const trigger = (error: AxiosError<any>) => {
    const isAborted = error.code === "ECONNABORTED";
    const isNetwork = error.code === "ERR_NETWORK";
    const isBadRequest = error.code === "ERR_BAD_REQUEST";

    if (isAborted) {
      toast.error("Request timed out", { action: <CloseToast /> });
    }
    if (isNetwork) {
      toast.error("Unable to reach the server", { action: <CloseToast /> });
    }
    if (isBadRequest) {
      toast.error(
        error.response?.data?.message || "wrong information supplied",
        { action: <CloseToast /> },
      );
    }
  };

  return trigger;
};
