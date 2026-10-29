// Encapsulation keeps data private and exposes safe methods to use it.
class BankAccount {
    private balance: number;

    constructor(
        public readonly accountHolder: string,
        initialBalance: number,
    ) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount("Asha", 500);
account.deposit(150);
console.log("Encapsulation - account balance:", account.getBalance());

// Inheritance lets a child class reuse and extend a parent class.
class Animal {
    constructor(public name: string) {}

    makeSound(): string {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    fetch(): string {
        return `${this.name} fetches the ball`;
    }
}

const dog = new Dog("Buddy");
console.log("Inheritance -", dog.makeSound());
console.log("Child class method -", dog.fetch());

// Polymorphism lets different child classes implement the same method differently.
class Cat extends Animal {
    override makeSound(): string {
        return `${this.name} says meow`;
    }
}

const animals: Animal[] = [new Dog("Rex"), new Cat("Luna")];
animals.forEach((animal) => console.log("Polymorphism -", animal.makeSound()));

// Abstraction defines a common contract while leaving details to subclasses.
abstract class Shape {
    abstract area(): number;

    describe(): string {
        return `Area: ${this.area()}`;
    }
}

class Rectangle extends Shape {
    constructor(
        private width: number,
        private height: number,
    ) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(4, 6);
console.log("Abstraction -", rectangle.describe());

// Access modifiers control where class members can be accessed.
class AccessModifierExample {
    public name: string; // Accessible from anywhere.
    private secretCode: string; // Accessible only inside this class.
    protected department: string; // Accessible inside this class and its subclasses.
    public readonly id: number; // Can be set here, then read but not reassigned.

    constructor(name: string, secretCode: string, department: string, id: number) {
        this.name = name;
        this.secretCode = secretCode;
        this.department = department;
        this.id = id;
    }

    public getSecretCode(): string {
        return this.secretCode;
    }
}

class Manager extends AccessModifierExample {
    getDepartment(): string {
        return this.department; // A subclass can access a protected member.
    }
}

const manager = new Manager("Ravi", "MGR-42", "Engineering", 101);
console.log("Public name:", manager.name);
console.log("Private value through a public method:", manager.getSecretCode());
console.log("Protected value through a subclass method:", manager.getDepartment());
console.log("Readonly ID:", manager.id);
// manager.secretCode; // Error: private members are only accessible in their class.
// manager.department; // Error: protected members are only accessible in the class or subclasses.
// manager.id = 202; // Error: readonly properties cannot be reassigned.
