// An interface describes the shape an object must have.
interface Student {
    name: string;
    age: number;
}

const student: Student = {
    name: "Asha",
    age: 20,
};
console.log("Student:", student);

// Optional properties may be omitted; readonly properties cannot be reassigned.
interface Product {
    readonly id: number;
    name: string;
    description?: string;
}

const product: Product = {
    id: 101,
    name: "Notebook",
};
console.log("Product:", product);

// An interface can declare methods that implementing objects provide.
interface Greeter {
    greet(name: string): string;
}

const friendlyGreeter: Greeter = {
    greet(name: string): string {
        return `Hello, ${name}!`;
    },
};
console.log(friendlyGreeter.greet("Ravi"));

// Interfaces can extend another interface to add more properties.
interface Person {
    name: string;
}

interface Employee extends Person {
    employeeId: number;
    department: string;
}

const employee: Employee = {
    name: "Mina",
    employeeId: 501,
    department: "Design",
};
console.log("Employee:", employee);

// A class can implement an interface and provide its required members.
interface Printable {
    print(): void;
}

class Report implements Printable {
    constructor(private title: string) {}

    print(): void {
        console.log(`Printing report: ${this.title}`);
    }
}

const report: Printable = new Report("Monthly Summary");
report.print();

// An interface can describe a function signature.
interface Calculator {
    (first: number, second: number): number;
}

const add: Calculator = (first, second) => first + second;
console.log("Interface function result:", add(5, 3));
