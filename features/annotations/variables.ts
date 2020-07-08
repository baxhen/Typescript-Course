let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

// Array

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [12, 43, 54, 12];
let truths: boolean[] = [false, true, false];

// Classes

class Car {}

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 29,
};

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when use annotations
// 1) Function that retirns the any type

const json = '{"x": 10, "y":20}';

const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

// 2) When we initialize a variable in one line and initialize later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cant be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
