// A callback is a function passed to another function as an argument.
type NumberCallback = (result: number) => void;

function calculateAndReport(
    first: number,
    second: number,
    callback: NumberCallback
): void {
    const result = first + second;
    callback(result);
}

calculateAndReport(7, 5, (sum) => {
    console.log("Sum from callback:", sum);
});

// Array methods such as forEach also receive callbacks.
const callbackNames: string[] = ["Asha", "Ravi", "Maya"];
callbackNames.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});

// Function overloads provide different call signatures for one function.
function formatValue(value: string): string;
function formatValue(value: number): string;
function formatValue(value: string | number): string {
    if (typeof value === "number") {
        return `Number: ${value.toFixed(2)}`;
    }
    return `Text: ${value.toUpperCase()}`;
}

console.log(formatValue("typescript"));
console.log(formatValue(42));

// Overloads can also describe functions with different numbers of parameters.
function createMessage(name: string): string;
function createMessage(name: string, greeting: string): string;
function createMessage(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

console.log(createMessage("Asha"));
console.log(createMessage("Ravi", "Welcome"));
