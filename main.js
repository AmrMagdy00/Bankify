import { DOM } from "./elements.js";
import { requestLoan } from "./logic/loan.js";
import { login } from "./logic/login.js";
import { currentUser } from "./logic/login.js";



DOM.buttons.loan.addEventListener("click", function (e) {
  e.preventDefault();
  requestLoan(currentUser);
});



DOM.buttons.login.addEventListener("click", function (e) {

  e.preventDefault();
  login();
})