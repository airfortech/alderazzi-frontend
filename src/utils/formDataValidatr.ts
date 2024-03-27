export const formDataValidator = <T>(data: T) => {
  const validatedData: T = Object.keys(data as object).reduce(
    (acc: any, key) => {
      acc[key as keyof T] =
        data[key as keyof T] === "null"
          ? null
          : data[key as keyof T] === "true"
          ? true
          : data[key as keyof T] === "false"
          ? false
          : data[key as keyof T];
      return acc;
    },
    {} as T
  );
  return validatedData;
};
