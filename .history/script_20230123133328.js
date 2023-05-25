'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // Устанавливаем значения по умолчанию, чтобы не было Undefined. В ES 6 можно устанавливать значения по умолчанию и использовать ранее объявленные переменные
) {
  // ES 5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2); // price = 398
createBooking('LH123', 5); // price = 995
