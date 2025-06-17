import { DOM } from "./elements.js";
import { UI } from "./ui/displayMovements.js";
import { requestLoan } from "./logic/loan.js";
import { account1 } from "./data/accounts.js";

export const currentUser = account1;
const displayUI = function () {
  UI.Update(currentUser.movements);
};
displayUI();

DOM.buttons.loan.addEventListener("click", function (e) {
  e.preventDefault();
  requestLoan(currentUser);
});
