import { DOM } from "../elements.js";
import { Helper } from "../logic/Helper.js";
export const UI = {
  Update(movements) {
    this.displayMovements(movements);
    this.displayInMovements();
    this.displayOutMovements();
    this.displayBalance();
    this.displayInterestRate();
    this.displayUserName();
    this.hideLoginForm();
    this.displayAppInterface();
  },
  displayMovements(movements) {
    DOM.containers.movements.innerHTML = ""; // clear previous
    movements.forEach((obj, index) => {
      const movementType = obj.value > 0 ? "deposit" : "withdrawal";
      const movementsInHTML = `
        <div class="movements__row">
          <div class="movements__type movements__type--${movementType}">
            ${index + 1} ${movementType}
          </div>
          <div class="movements__date">${obj.date}</div>
          <div class="movements__value">${obj.value}€</div>
        </div>
      `;
      DOM.containers.movements.insertAdjacentHTML(
        "afterbegin",
        movementsInHTML
      );
    });
  },

  displayInMovements() {
    const totalIn = Helper.getBalance();
    DOM.labels.sumIn.textContent = `${totalIn}€`;
  },

  displayOutMovements() {
    const totalOut = Helper.getOutBalance();
    DOM.labels.sumOut.textContent = `${totalOut}€`;
  },

  displayBalance() {
    const balance = Helper.getBalance();
    DOM.labels.balance.textContent = `${balance}€`;
  },

  displayInterestRate() {
    const Rate = Helper.getInterest();
    DOM.labels.sumInterest.textContent = `${Rate}€`;
  },

  displayUserName() {
    const userName = Helper.getuserName();
    DOM.labels.welcome.textContent = `Welcome ${userName}`;
  },

  hideLoginForm() {
    const formLogin = (DOM.forms.login.style.display = "none");
  },

  displayAppInterface() {
    DOM.containers.app.style.opacity = 1;
  },
};
