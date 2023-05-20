export interface UserPrivileges {
  category: string;
  actions: {
    action: string;
    isAllowed: boolean;
  }[];
}
