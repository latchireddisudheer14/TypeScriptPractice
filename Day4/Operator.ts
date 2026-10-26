// Arithmetic operators
const firstNumber: number = 12;
const secondNumber: number = 5;
console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Remainder:", firstNumber % secondNumber);
console.log("Exponent:", firstNumber ** 2);

// Assignment operators update a variable's value.
let total: number = 10;
total += 4; // same as total = total + 4
total *= 2; // same as total = total * 2
console.log("Updated total:", total);

// Comparison operators produce boolean values.
console.log("Is firstNumber greater?", firstNumber > secondNumber);
console.log("Are they equal?", firstNumber === secondNumber);
console.log("Are they different?", firstNumber !== secondNumber);

// Logical operators combine boolean conditions.
const hasTicket: boolean = true;
const isOldEnough: boolean = true;
console.log("Can enter:", hasTicket && isOldEnough);
console.log("Needs attention:", !hasTicket || !isOldEnough);

// The ternary operator selects a value based on a condition.
const age: number = 20;
const ageMessage: string = age >= 18 ? "Adult" : "Minor";
console.log("Age group:", ageMessage);

// Nullish coalescing uses the fallback only for null or undefined.
const displayName: string | null = null;
console.log("Name:", displayName ?? "Guest");

//Strict equality checks both value and type.
const value1: number = 5;
const value2: string = "5";
console.log("Strict equality:", value1 === value2); // false
console.log("Loose equality:", value1 == value2); // true

//Inequality operators check for non-equality.
console.log("Is value1 less than or equal to value2?", value1 <= Number(value2)); // true 
//both Inequality operators and strict equality operators are used to compare values in TypeScript, but they differ in how they handle type coercion.
console.log("Is value1 not equal to value2?", value1 != value2); // false
console.log("Is value1 not equal to value2?", value1 !== value2); // true

