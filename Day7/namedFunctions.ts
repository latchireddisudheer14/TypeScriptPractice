// A named function declaration with parameters and an explicit return type.
function greetUser(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greetUser("Asha"));

// A function can accept multiple parameters.
function addNumbers(first: number, second: number): number {
    return first + second;
}
console.log("Sum:", addNumbers(8, 12));

// Optional parameters can be omitted by the caller.
function introducePerson(name: string, city?: string): string {
    if (city) {
        return `${name} is from ${city}.`;
    }
    return `${name}'s city is not specified.`;
}
console.log(introducePerson("Ravi", "Chennai"));
console.log(introducePerson("Maya"));

// Default parameters provide a value when an argument is omitted.
function calculateTotal(price: number, quantity: number = 1): number {
    return price * quantity;
}
console.log("Default quantity total:", calculateTotal(25));
console.log("Custom quantity total:", calculateTotal(25, 3));

// Rest parameters collect any number of arguments into an array.
function getAverageScore(...scores: number[]): number {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return scores.length === 0 ? 0 : total / scores.length;
}
console.log("Average score:", getAverageScore(80, 90, 100));

//Rest parameters with union types
function logValues(...values: (string | number)[]): void {
    values.forEach(value => {
        console.log("Value:", value);
    });
}
logValues("Hello", 42, "World", 3.14);

// A void function performs an action without returning a value.
function printReminder(message: string): void {
    console.log("Reminder:", message);
}
printReminder("Practice TypeScript functions.");

//Anonymous function assigned to a variable
const multiplyNumbers = function (a: number, b: number): number {
    return a * b;
};
console.log("Product:", multiplyNumbers(6, 7));

// Arrow function with concise syntax
const squareNumber = (num: number): number => num * num;
console.log("Square:", squareNumber(5));

// Arrow function with multiple parameters and a block body
const divideNumbers = (numerator: number, denominator: number): number => {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return numerator / denominator;
};
console.log("Division:", divideNumbers(10, 2));

