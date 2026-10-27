// forEach runs a callback for every item without creating a new array.
const numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
    console.log(`Item ${index + 1}: ${number}`);
});

//foreach fruits example
const fruits: string[] = ["apple", "banana", "orange"];
fruits.forEach((fruit) => {
    console.log(`index of ${fruit}: ${fruits.indexOf(fruit)}`);
});

// map transforms each item and returns a new array.
const doubledNumbers: number[] = numbers.map((number) => number * 2);
console.log("Doubled numbers:", doubledNumbers);

// filter returns a new array containing items that pass a condition.
const evenNumbers: number[] = numbers.filter((number) => number % 2 === 0);
console.log("Even numbers:", evenNumbers);

// reduce combines all items into a single value.
const sum: number = numbers.reduce((total, number) => total + number, 0);
console.log("Sum:", sum);

// some returns true if at least one item passes the condition.
const hasNumberGreaterThanFour: boolean = numbers.some((number) => number > 4);
console.log("Has a number greater than 4:", hasNumberGreaterThanFour);

// every returns true if all items pass the condition.
const allNumbersArePositive: boolean = numbers.every((number) => number > 0);
console.log("Are all numbers positive:", allNumbersArePositive);
