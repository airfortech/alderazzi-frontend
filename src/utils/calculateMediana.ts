export const calculateMediana = (arr: number[] | null) => {
  if (arr === null) return null;
  const max = Math.max(...arr);
  const average = Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
  return Math.round((max + average) / 2);
};
