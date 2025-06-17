import { getCurrentDate } from "../utils/date.js";
import { DOM } from "../../elements.js";
import { UI } from "../ui/displayMovements.js";

export const requestLoan = function (currentUser) {
  const amount = Math.abs(Number(DOM.inputs.loanAmount.value));
  DOM.inputs.loanAmount.value = "";
  const stringDate = getCurrentDate();

  const newMovement = {
    value: amount,
    date: stringDate,
  };

  setTimeout(() => {
    currentUser.movements.push(newMovement);
    UI.Update(currentUser.movements);
  }, 2000);
};
