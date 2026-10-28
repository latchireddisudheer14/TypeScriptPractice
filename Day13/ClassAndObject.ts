// An object literal is the simplest way to create an object.
const student:object = {
    name: "Asha",
    age: 20,
};
console.log("Object literal:", student);

// An inline object type describes the shape directly where it is used.
const course: { title: string; durationInWeeks: number } = {
    title: "TypeScript Basics",
    durationInWeeks: 6,
};
console.log("Inline object type:", course);

// A type alias gives a reusable name to an object shape.
type Book = {
    title: string;
    author: string;
};

const book: Book = {
    title: "Learning TypeScript",
    author: "A. Reader",
};
console.log("Object using a type alias:", book);

//intersection types combine multiple object shapes into one.
type Address = {
    street: string;
    city: string;
};

type Person = {
    name: string;
    age: number;
};

type Employee = Person & Address;

const employee: Employee = {
    name: "Ravi",
    age: 30,
    street: "123 Main St",
    city: "Chennai",
};
console.log("Intersection type object:", employee); 

// A class defines a blueprint; `new` creates an instance object.
class Car {
    constructor(
        public make: string,
        public model: string,
    ) {}

    describe(): string {
        return `${this.make} ${this.model}`;
    }
}

const car: Car = new Car("Toyota", "Corolla");
console.log("Class instance:", car.describe());

// Object() creates an object and Object.assign() copies properties into one.
const objectConstructor = Object({ color: "blue" });
console.log("Using Object():", objectConstructor);

const assignedObject = Object.assign({}, { name: "Mina" }, { age: 25 });
console.log("Using Object.assign():", assignedObject);

// Object.create() creates an object with the specified prototype.
const prototype = { greet: () => "Hello from the prototype" };
const createdObject = Object.create(prototype) as { greet: () => string };
console.log("Using Object.create():", createdObject.greet());

// A factory function can create and return objects.
function createPoint(x: number, y: number): { x: number; y: number } {
    return { x, y };
}

const point = createPoint(3, 7);
console.log("Factory function:", point);
