// for loop: repeat an action a known number of times.
for (let count: number = 1; count <= 5; count++) {
    console.log("For loop count:", count);
}

// while loop: repeat while the condition remains true.
let countdown: number = 3;
while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
}

// do...while loop: run the block once before checking the condition.
let attempts: number = 0;
do {
    console.log("Attempt:", attempts + 1);
    attempts++;
} while (attempts < 2);

// for...of loop: visit each item in an array.
const fruits: string[] = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log("Fruit:", fruit);
}

// for...in loop: visit each key in an object.
const student = { name: "Asha", age: 21, course: "TypeScript" };
console.log(typeof student);
type keyType = keyof typeof student;
let keyTypeValue: keyof typeof student = "name";
console.log(student[keyTypeValue]);
console.log(student["age"]);
for (const key in student) {
    console.log(`${key}: ${student[key  as keyof typeof student]}`);
}

type User = {
  id: number;
  name: string;
  email: string;
}

// Equivalent to: "id" | "name" | "email"
type UserKeys = keyof User; 

let validKey: UserKeys = "name";  // OK
//let invalidKey: UserKeys = "age"; // Error: Type '"age"' is not assignable to type 'UserKeys'

const colors = {
  primary: "#3498db",
  secondary: "#2ecc71",
  danger: "#e74c3c"
};

// 1. typeof colors yields: { primary: string; secondary: string; danger: string; }
// 2. keyof that type yields: "primary" | "secondary" | "danger"
type ColorKeys = keyof typeof colors; 

// Now, ColorKeys is strictly constrained:
let myColor: ColorKeys;

myColor = "primary";   // OK
myColor = "secondary"; // OK
//myColor = "success";   // Error: Type '"success"' is not assignable to type 'ColorKeys'.



// continue skips the current iteration; break exits the loop.
for (let number: number = 1; number <= 5; number++) {
    if (number === 2) {
        continue;
    }
    if (number === 4) {
        break;
    }
    console.log("Loop control example:", number);
}
