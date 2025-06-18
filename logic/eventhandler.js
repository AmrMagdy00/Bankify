import { DOM } from "../elements.js";
import { requestLoan } from "../logic/loan.js";
import { login, currentUser } from "../logic/login.js";
import { Helper } from "./Helper.js";
import { UI } from "../ui/displayMovements.js";

export function setupListeners() {
  if (DOM?.buttons?.loan) {
    DOM.buttons.loan.addEventListener("click", function (e) {
      e.preventDefault();
      requestLoan(currentUser);
    });
  }

  if (DOM?.buttons?.login) {
    DOM.buttons.login.addEventListener("click", function (e) {
      e.preventDefault();
      login();
    });
  }

  if (DOM?.buttons.transfer) {
    DOM.buttons.transfer.addEventListener("click", function (e) {
      e.preventDefault();
      if (
        DOM.inputs.transferTo.value == "" ||
        DOM.inputs.transferAmount.value == ""
      )
        return;
      const transferTo = DOM.inputs.transferTo.value;
      const ammount = Number(DOM.inputs.transferAmount.value);

      if (Helper.transferMoney(transferTo, ammount)) {
        UI.Update(currentUser.movements);
      }
    });
  }
}
