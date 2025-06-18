import { accounts } from "../data/accounts.js";
import { currentUser } from "../logic/login.js";

export const Helper = {
  getBalance() {
    const balance = currentUser.movements.reduce(
      (acc, mov) => acc + mov.value,
      0
    );
    currentUser.balance = balance;
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

  getUserByOwner(owner) {
    return accounts.find((s) => s.owner === owner);
  },

  getuserName() {
    return currentUser.owner;
  },

  getDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  },

  transferMoney(transferTo, ammount) {
    if (this.getBalance() < ammount) return;
    try {
      const receivedUser = this.getUserByOwner(transferTo);
      const currentUserMovment = {
        value: ammount * -1,
        Date: this.getDate(),
      };

      const receivedUserMovment = {
        value: ammount,
        Date: this.getDate(),
      };

      currentUser.movements.push(currentUserMovment);
      receivedUser.movements.push(receivedUserMovment);
    } catch (e) {
      console.log(`ERROR ${e}`);
      return false;
    }
    return true;
  },
};
