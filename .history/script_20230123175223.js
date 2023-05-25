'use strict';
// 1 Lect

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers // Устанавливаем значения по умолчанию, чтобы не было Undefined. В ES 6 можно устанавливать значения по умолчанию и использовать ранее объявленные переменные
// ) {
//   // ES 5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2); // price = 398
// createBooking('LH123', 5); // price = 995
// createBooking('LH123', undefined, 1000);  //scip param 'LH123', numPassengers: 1, price: 1000.  Чтобы пропустить значение по умолчанию, можно приравнять к Undefined и

// 2 Lection First-Class and Higher-Order Functions
// const flight = 'LH234';
// const yevhen = {
//   name: 'Yevhen Miroshnychenko',
//   passport: 2474732349934,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 2474732349934) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };
// // checkIn(flight, yevhen);
// console.log(flight);
// console.log(yevhen);

// Тоже самое, что...
// const flightNum = flight;
// const passenger = yevhen;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };
// newPassport(yevhen);
// checkIn(flight, yevhen);

// Lect3 . Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); // Удаляет пробелы
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' '); // Spread и Деструктуризация
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord); // Вызываем коллбэк функцию
transformer('JavaScript is the best!', oneWord); // Вызываем коллбэк функцию
