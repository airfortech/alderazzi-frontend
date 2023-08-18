export const options = new Array(14).fill(null).map((_, i) => {
  return { value: (i + 1).toString(), label: (i + 1).toString() + " dni" };
});
