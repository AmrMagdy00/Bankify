import { DOM } from "./elements.js";
import { UI } from "./ui/displayMovements.js";
import { requestLoan } from "./logic/loan.js";
import { account1, accounts } from "./data/accounts.js";
import { login } from "./logic/login.js"

export let currentUser = null;


DOM.buttons.loan.addEventListener("click", function (e) {
  e.preventDefault();
  requestLoan(currentUser);
});



DOM.buttons.login.addEventListener("click", function (e) {

  e.preventDefault();
  login();
})
