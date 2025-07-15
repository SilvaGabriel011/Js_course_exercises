// 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const user = 'Steven Thomas Williams'; // stw

const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const displayMovements = function (movements) {
//   containerMovements.innerHtml = '';
//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdraw';

//     const hmtl1 = `
//           <div class="movements__row">
//           <div class="movements__type movements__type-${type}">${
//       i + 1
//     }${type}</div>
//           <div class="movements__value">${mov}€</div>
//           </div>
//                   `;

//     containerMovements.insertAdjacentHTML('afterbegin', hmtl1);
//   });
// };
// displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));

// console.log(arr.splice(2));

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

//////////////////////////////////////////////

// for each

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`deposito of ${movement}`);
//   } else {
//     console.log(`you withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (movement) {
//   for (const movement of movements) {
//     if (movement < 0) {
//       console.log(`deposits of ${movement}`);
//     } else {
//       console.log(`you withdrew ${Math.abs(movement)}`);
//     }
//   }
// });

// for each on map/sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const functionOuter = function () {
//   (innerFunction = () => {
//     console.log(a);
//   })
// };

// function studentMsg(totalScores, studentScore) {
//   let sum = 0;
//   for (const score of totalScores) {
//     sum += score;
//   }
//   if (studentScore <= 59) {
//     return `Class average: ${
//       sum / totalScores.length
//     }. Your grade: ${studentScore}. You failed the course.`;
//   } else {
//     return `Class average: ${
//       sum / totalScores.length
//     }. Your grade: ${studentScore}. You passed the course.`;
//   }
// }
// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

// const eurToUsd = 1.1;

// const movementsUsd = movements.map(functio(mov){
//   return mov * eurToUsd
// });

// const createUserName = function (accs) {
//   accs.forEach(acc => {
//     acc.userName = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };

// createUserName(accounts);
// console.log(accounts);

// const withdrawls = movements.filter(mov => mov < 0);

// const maxValue = movements.reduce(
//   (acc, current) => (acc < current ? (acc = current) : (acc = acc)),
//   movements[0]
// );

// // maxValue(movements);
// console.log(maxValue);
