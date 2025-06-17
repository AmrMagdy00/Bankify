export const account1 = {
  owner: "1",
  movements: [
    { value: 200, date: "1/6/2025" },
    { value: 450, date: "2/6/2025" },
    { value: -400, date: "3/6/2025" },
    { value: 3000, date: "4/6/2025" },
    { value: -650, date: "5/6/2025" },
    { value: -130, date: "6/6/2025" },
    { value: 70, date: "7/6/2025" },
    { value: 1300, date: "8/6/2025" },
  ],
  interestRate: 1.2,
  pin: 1,
};

export const account2 = {
  owner: "Jessica Davis",
  movements: [
    { value: 5000, date: "1/6/2025" },
    { value: 3400, date: "2/6/2025" },
    { value: -150, date: "3/6/2025" },
    { value: -790, date: "4/6/2025" },
    { value: -3210, date: "5/6/2025" },
    { value: -1000, date: "6/6/2025" },
    { value: 8500, date: "7/6/2025" },
    { value: -30, date: "8/6/2025" },
  ],
  interestRate: 1.5,
  pin: 2222,
};

export const account3 = {
  owner: "Steven Thomas Williams",
  movements: [
    { value: 200, date: "1/6/2025" },
    { value: -200, date: "2/6/2025" },
    { value: 340, date: "3/6/2025" },
    { value: -300, date: "4/6/2025" },
    { value: -20, date: "5/6/2025" },
    { value: 50, date: "6/6/2025" },
    { value: 400, date: "7/6/2025" },
    { value: -460, date: "8/6/2025" },
  ],
  interestRate: 0.7,
  pin: 3333,
};

export const account4 = {
  owner: "Sarah Smith",
  movements: [
    { value: 430, date: "1/6/2025" },
    { value: 1000, date: "2/6/2025" },
    { value: 700, date: "3/6/2025" },
    { value: 50, date: "4/6/2025" },
    { value: 90, date: "5/6/2025" },
  ],
  interestRate: 1,
  pin: 4444,
};

export const accounts = [account1, account2, account3, account4];
