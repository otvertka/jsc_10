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

// /////////////// / // Lect 5, CALL AND APPLY METHODS BUGnotes
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightnNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightnNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtman');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const bookaby = lufthansa.book; // Переиспользуем метод book(flightnNum, name) {} , записав в переменную Book эту функцию
// // Does NOT work  Т.к. функция bookaby была вызвана напрямую, а не как метод или свойство объекта.
// // bookaby(23, 'Sarah Williams'); //  В строгом режиме, если значение this не установлено в контексте выполнения, оно остаётся undefined

// // Call method
// bookaby.call(eurowings, 23, 'Sarah Williams'); // Функция - это просто объект , и поэтому объект имеет Метод, например сall. В этом методе 1й аргумент это откуда мы хотим This
// console.log(eurowings);

// bookaby.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// bookaby.call(swiss, 1111, 'Yevhen Miro');
// console.log(swiss);

// // Apply method
// const flightData = [583, 'George Cooper'];
// bookaby.apply(swiss, flightData);
// console.log(swiss);

// bookaby.call(swiss, ...flightData); // spread

// console.log(swiss);

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

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(200));

// CODING CHALLENGE # 1
// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0].
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     // Get answer
//     const answer = Number(
//       prompt(`${this.question}\n
//     ${this.options.join('\n')}\n(Write option number)`)
//     );
//     console.log(answer);
//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++; // Если это цифра и ответ не больше 3, то увеличиваем на 1 голос в массиве голосов
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are: ${this.answers.join(', ')} `); // конвертируем в строку
//     }
//   },
// };
// // poll.registerNewAnswer();
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); // Poll results are: 5, 2, 3.  Мы используем новый This
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }); // [1, 5, 3, 9, 6, 1]  Мы используем новый This

// const registerNewAnswer = function (obj) {
//   prompt(`${this.question}\n ${this.options}`);
//   if (registerNewAnswer === 0) {
//     this.answers[`${registerNewAnswer}`]++;
//   }
// };

// const registerNewAnswer = function () {
//   prompt(`${poll.question}\n ${poll.options}`);
//   if (registerNewAnswer === 0) {
//     console.log('ggg');
//   }
// };
// console.log(registerNewAnswer);
// console.log(poll.answers);

// Bind webDev и ЛЁРН ДЖС
// let user = {
//   userName: 'Jack',
//   sayHi: function () {
//     console.log(this.userName);
//   },
// };
// setTimeout(user.sayHi.bind(user), 1000);

// function f(a, b) {
//   console.log(this);
//   console.log(a + b);
// }

// let g = f.bind('Context');
// g(1, 2);

// let wrapper = func.bind(context, arg1, arg2, ...);
// func.bind(context) == bind(func, context);

///
// let user = {
//   data: [{ name: 'John' }, { name: 'Max' }],

//   showFirst: function (event) {
//     console.log(this.data[1].name);
//     console.log(this);
//   },
// };
// document
//   .querySelector('#btn')
//   .addEventListener('click', user.showFirst.bind(user));

// function mul(a, b) {
//   return a * b;
// }
// let double = mul.bind(null, 2);

// console.log(double(3)); // = mul(2, 3) = 6

//////// Lesson 136/ immediatly invoked function expressions
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will ALSO never run again'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// // console.log(isPrivate); // isPrivate is not defined
// console.log(notPrivate); // 46

//////// Lesson 137/ CLOSURES
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// Example 1/
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// console.dir(f);

// // Re-assign f function
// h();
// f();
// console.dir(f);

// Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;

// boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
})();
console.log(header);

// document.body.addEventListener('click', function () {
//   header.style.color = 'blue';
// });

//LEARN JS
// let name = 'John';
// function sayHi() {
//   console.log('Hi,' + name);
// }
// sayHi();
// name = 'Pete';
// sayHi();

// function makeWorker() {
//   let name = 'Pete';

//   return function () {
//     console.log(name);
//   };
// }

// let name = 'John';

// // create a function
// let work = makeWorker();

// work();

// function sayHiBye(firstName, lastName) {
//   //
//   function getFullName() {
//     return firstName + ' ' + lastName;
//   }

//   console.log('Hello,' + getFullName());
//   console.log('Bye, ' + getFullName());
// }

// sayHiBye('Yevhen', 'Mirosh');

// // функция констуктор возвращает новый объект
// function User(name) {
//   // методом объекта становится вложенная функция
//   this.sayHi = function () {
//     console.log(name);
//   };
// }

// let user = new User('John');
// user.sayHi();

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// console.log(counter()); //  0
// console.log(counter()); //  1
// console.log(counter()); //  2

// let phrase = 'Hello';

// if (true) {
//   let user = 'John';
//   console.log(`${phrase}, ${user}`);
// }
// console.log(user);

// function f() {
//   let value = 123;

//   function g() {
//     alert(value);
//   }

//   return g;
// }

// let g = f();

// function f() {
//   let value = Math.random();

//   return function () {
//     console.log(value);
//   };
// }
// let arr = [f(), f(), f()];
// console.log(arr);

// let value = 'Сюрприз!';

// function f() {
//   let value = 'ближайшее значение';

//   function g() {
//     debugger;
//   }
//   return g;
// }
// let g = f();
// g();
