export const getCurrentDate = function () {
  const today = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(today.getDate())}/${pad(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;
};
