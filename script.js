'use strict';

/*
// DEFAULT PARAMETERS
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 1991;
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
createBooking('LH123', 2);
createBooking('LH123', 5);

// We cant do this
createBooking('LH123', undefined, 1000);


// HOW PASSING ARHUMENTS WORKS VALUE VS REFERENCE
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing
// const flightNum = flight;
// const passenger = jonas;

// Preparing for real life situations
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);


// HIGHER ORDER FUNCTIONS
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  console.log(first, others);
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher - order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👌');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


// FUNCTIONS RETURNING FUNCTIONS
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Jezemiah');

greet('Hello')('Jonas');

const greetArr = greetingArr => {
  const nameFunction = nameArr => {
    console.log(`${greetingArr} ${nameArr}`);
  };
  return nameFunction;
};
const greeterHeyArr = greetArr('Hey');
greeterHeyArr('Jonas');
greeterHeyArr('Jezemiah');

const greetArr2 = greeting => name => console.log(`${greeting} ${name}`);
greetArr2('Hi')('Jezemiah');
*/

// THE CALL AND APPLY METHODS
const Lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

Lufthansa.book(239, 'Jonas Schmeddtmann');
Lufthansa.book(635, 'Jezemiah');
console.log(Lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = Lufthansa.book;

// Does not work
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(Lufthansa, 239, 'Marry Cooper');

console.log(Lufthansa);

// Call Method
const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// APPLY
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// using call
book.call(swiss, ...flightData);

//BIND
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(Lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams ');
