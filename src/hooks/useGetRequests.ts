import { useQuery } from "@tanstack/react-query";
import request from "./requests";
import { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { HrRole } from "@/interfaces/hr-intrerface";

interface IToken {
  admin: {
    adminid: string;
    role: HrRole;
  };
  exp: string;
  iat: string;
}

interface IGetRequest {
  url: string;
  queryKey: any;
  refetchInterval?: number;
  refetchOnWindowFocus?: boolean;
  staleTime?: number;
  detailId?: string;
  showAdmin?: boolean;
  param?: string;
}
const DEFAULT = 60 * 1000;

export const useGetRequest = <T>({
  url,
  staleTime = DEFAULT,
  param = "",
  detailId,
  showAdmin = true,
  ...rest
}: IGetRequest) => {
  const [{ authCookie }] = useCookies(["authCookie"]);
  const adminId = (
    authCookie ? jwtDecode(authCookie as string) : null
  ) as IToken | null;
  let reqUrl;
  if (showAdmin && detailId) {
    reqUrl = `${url}/${adminId ? `${adminId.admin.adminid}` : ""}/${detailId}${param}`;
  } else {
    reqUrl = `${url}${adminId ? `/${adminId.admin.adminid}` : ""}${param}`;
  }

  return useQuery<AxiosResponse<T>>({
    ...rest,
    staleTime,
    queryFn: () => {
      return request.get(reqUrl) as Promise<AxiosResponse<T>>;
    },
  });
};
