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

///////////////// Lect3 . Functions Accepting Callback Functions

// const oneWord = function (str) {
//   return str.replaceAll(/ /g, '').toLowerCase(); // Удаляет пробелы
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' '); // Spread и Деструктуризация
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript iS ThE Best!', upperFirstWord); // Вызываем коллбэк функцию
// transformer('JavaScript is the best!', oneWord); // Вызываем коллбэк функцию

// // JS использует коллбэки очень часто
// const high5 = function () {
//   // Low level of abstraction function
//   console.log('👋');
// };
// document.body.addEventListener('click', high5); // High level of abstraction function
// ['Jonas', 'Marta', 'Patrik'].forEach(high5);

//////////////// Lect 4 Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // Challenge стрелочная функция
// // const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas'); //  greet('Hello')- это функция, а ('Jonas')- это аргумент

// /////////////// / // Lect 5, CALL AND APPLY METHODS
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightnNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightnNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtman');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const bookaby = lufthansa.book; // Переиспользуем метод book(flightnNum, name) {} , записав в переменную Book эту функцию
// Does NOT work  Т.к. функция bookaby была вызвана напрямую, а не как метод или свойство объекта.
// bookaby(23, 'Sarah Williams'); //  В строгом режиме, если значение this не установлено в контексте выполнения, оно остаётся undefined

// Call method
bookaby.call(eurowings, 23, 'Sarah Williams'); // Функция - это просто объект , и поэтому объект имеет Метод, например сall. В этом методе 1й аргумент это откуда мы хотим This
console.log(eurowings);

bookaby.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

bookaby.call(swiss, 1111, 'Yevhen Miro');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
bookaby.apply(swiss, flightData);
console.log(swiss);

bookaby.call(swiss, ...flightData); // spread

console.log(swiss);

// Bind method
// bookaby.call(eurowings, 23, 'Sarah Williams');

// const bookEW = bookaby.bind(eurowings);
// const bookLH = bookaby.bind(lufthansa);
// const bookLX = bookaby.bind(swiss);
// bookEW(23, 'Steven Williams');

// const bookEW23 = bookaby.bind(eurowings, 12345);
// bookEW23('Jonas Schmedtmann'); //
// bookEW23('Martha Cooper');
// // With Event Listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));
