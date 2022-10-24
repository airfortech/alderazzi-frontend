import { UserRole } from "../types/UserRole";

export const isRoleAllowed = (
  allowedRoles: UserRole[] | null,
  currentRole: UserRole | undefined
) => {
  if (allowedRoles === null) return true;
  if (!currentRole) return false;
  return allowedRoles.includes(currentRole);
};
