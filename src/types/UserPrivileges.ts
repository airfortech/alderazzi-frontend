export interface UserPrivileges {
  category: string;
  actions: {
    action: string;
    isAllowed: boolean;
  }[];
}

export interface UserPrivilegesResponse {
  privileges: UserPrivileges[];
  config: {
    keyGiverDrops: {
      maxAddTime: number;
    };
  };
}
