export enum Status {
  success = "success",
  error = "error",
}

export interface ApiResponse {
  status: Status;
  message?: string;
}

export const messages = {
  default: "Something went wrong.",
  auth: {
    wrongRole: "Role doesn't exist.",
    wrongPassword: "Wrong password.",
    unauthorized: "You have no permission.",
    logout: "You have logged out.",
  },
  users: {
    noRolesInDb: "No roles found in database. Contact with admin.",
    passwordChanged: "Password has been changed.",
    passwordMinLengthError: "Password must be at least 5 characters long.",
    passwordRequiredError: "Password is required.",
  },
  enemies: {
    enemyExists: "Such enemy exists.",
    enemyNotExists: "Such enemy not exists.",
    enemyAdded: "Enemy has been added.",
    nameIsRequired: "Enemy name is required.",
    enemyDeleted: "Enemy has been deleted.",
  },
  keyGivers: {
    keyGiverExists: "Such keygiver exists.",
    keyGiverNotExists: "Such keygiver not exists.",
    nameIsRequired: "Name is required.",
    nameExists: "Such keygiver name exists. Choose other one.",
    nameTooLong: "Name should have maximum 80 characters.",
    descriptionTooLong: "Description should have maximum 4000 characters.",
    respawnTimeNotANumber: "Respawn time must be a number of hours.",
    keyGiverAdded: "Keygiver has been added.",
    keyGiverDeleted: "Keygiver has been deleted.",
  },
  keys: {
    nameExists: "Such key name exists. Choose other one.",
    keyNotExists: "Such key not exists.",
    nameTooLong: "Name should have maximum 80 characters.",
    nameIsRequired: "Name is required.",
    treasuryNameTooLong: "Treasury name should have maximum 80 characters.",
    keyAdded: "Key has been added.",
    keyDeleted: "Key has been deleted.",
  },
  date: {
    invalidDate: "Invalid date format.",
    dateNotNever: "Date must newer than previous one.",
  },
};
