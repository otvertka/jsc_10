'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // Устанавливаем значения по умолчанию, чтобы не было Undefined
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
createBooking('LH123', 2, 800);
