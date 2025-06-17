import { currentUser } from "../logic/login.js";

export const Helper = {
  getBalance() {
    return currentUser.movements.reduce((acc, mov) => {
      return mov.value > 0 ? acc + mov.value : acc;
    }, 0);
  },

  getOutBalance() {
    return Math.abs(
      currentUser.movements.reduce((acc, mov) => {
        return mov.value < 0 ? acc + mov.value : acc;
      }, 0)
    );
  },

  getInterest() {
    return currentUser.movements
      .filter((mov) => mov.value > 0)
      .map((mov) => (mov.value * currentUser.interestRate) / 100)
      .filter((interest) => interest > 1)
      .reduce((acc, interest) => acc + interest, 0);
  },
};
2;
