export const DOM = {
  labels: {
    welcome: document.querySelector(".welcome"),
    date: document.querySelector(".date"),
    balance: document.querySelector(".balance__value"),
    sumIn: document.querySelector(".summary__value--in"),
    sumOut: document.querySelector(".summary__value--out"),
    sumInterest: document.querySelector(".summary__value--interest"),
    timer: document.querySelector(".timer"),
  },

  forms: {
    login: document.querySelector(".login"),
  },

  containers: {
    app: document.querySelector(".app"),
    movements: document.querySelector(".movements"),
  },

  buttons: {
    login: document.querySelector(".login__btn"),
    transfer: document.querySelector(".form__btn--transfer"),
    loan: document.querySelector(".form__btn--loan"),
    close: document.querySelector(".form__btn--close"),
    sort: document.querySelector(".btn--sort"),
  },

  inputs: {
    loginUsername: document.querySelector(".login__input--user"),
    loginPin: document.querySelector(".login__input--pin"),
    transferTo: document.querySelector(".form__input--to"),
    transferAmount: document.querySelector(".form__input--amount"),
    loanAmount: document.querySelector(".form__input--loan-amount"),
    closeUsername: document.querySelector(".form__input--user"),
    closePin: document.querySelector(".form__input--pin"),
  },
};
