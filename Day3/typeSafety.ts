// Type annotations help TypeScript catch incorrect values before runtime.
let studentName: string = "Asha";
let studentAge: number = 21;
let isEnrolled: boolean = true;

// An array can hold values of one declared type.
let scores: number[] = [88, 92, 95];
scores.push(90);

// A union allows a value to have one of a few specified types.
let studentId: number | string = 1024;
studentId = "STU-1024";

// Interfaces describe the shape an object must have.
interface Student {
    name: string;
    age: number;
    enrolled: boolean;
}

const student: Student = {
    name: studentName,
    age: studentAge,
    enrolled: isEnrolled
};

// Function parameter and return types make the contract explicit.
function getAverage(values: number[]): number {
    const total = values.reduce((sum, value) => sum + value, 0);
    return total / values.length;
}

// Type narrowing checks a union value before using type-specific behavior.
function describeId(id: number | string): string {
    if (typeof id === "number") {
        return `Numeric ID: ${id}`;
    }
    return `Text ID: ${id.toUpperCase()}`;
}

//Backlit declaration
let greetings:string = `Hello, ${student.name}! You are ${student.age} years old and your average score is ${getAverage(scores)}. Your ID is ${describeId(studentId)}.`;
console.log(greetings);
console.log(student);
console.log("Average score:", getAverage(scores));
console.log(describeId(studentId));

//null and undefined types
let optionalValue: string | null = null;
//optionalValue = "Now I have a value!";
console.log("Optional Value:", optionalValue);

let undefinedValue: number | undefined;
//undefinedValue = 42;
console.log("Undefined Value:", undefinedValue);

//any type allows any value, but should be avoided for type safety
let flexibleValue: any = "I can be anything!";
flexibleValue = 42;
flexibleValue = true;
console.log("Flexible Value:", flexibleValue);
