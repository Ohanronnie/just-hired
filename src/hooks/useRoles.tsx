import { HrRole } from "@/interfaces/hr-intrerface";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";

interface IToken {
  admin: {
    adminid: string;
    role: HrRole;
  };
  exp: string;
  iat: string;
}

export default function useRoles() {
  const [{ authCookie }] = useCookies(["authCookie"]);
  const adminData = (
    authCookie ? jwtDecode(authCookie as string) : null
  ) as IToken | null;
  const role = adminData?.admin.role || null;
  const adminId = adminData?.admin.adminid || null;

  return { role, isSuperAdmin: role === "superAdmin", adminId };
}
