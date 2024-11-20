export const parseDateToString = (date: Date | null) => {
  if (!date) return "";

  const year = formatWithZero(date.getFullYear());
  const month = formatWithZero(date.getMonth() + 1);
  const day = formatWithZero(date.getDate());
  const hour = formatWithZero(date.getHours());
  const minute = formatWithZero(date.getMinutes());

  return `${year}-${month}-${day} ${hour}:${minute}`;
};

export const formatWithZero = (value: number) =>
  value.toString().padStart(2, "0");
