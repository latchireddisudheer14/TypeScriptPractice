// An array stores multiple values of the same type.
const favoriteColors: string[] = ["blue", "green", "purple"];
favoriteColors.push("orange");
console.log("Favorite colors:", favoriteColors);

// Array<T> is another way to write a typed array.
const temperatures: Array<number> = [22, 25, 19, 27];
const warmDays: number[] = temperatures.filter((temperature) => temperature >= 24);
console.log("Warm days:", warmDays);

// A tuple has a fixed position and type for each element.
let person: [string, number] = ["Asha", 21];
person = ["Ravi", 25];
console.log(`${person[0]} is ${person[1]} years old.`);

// A tuple can use labels to make each position easier to understand.
const product: [name: string, price: number, inStock: boolean] = ["Notebook", 4.99, true];
console.log("Product:", product[0], "Price:", product[1], "Available:", product[2]);

// Optional tuple elements may be omitted.
const location: [latitude: number, longitude: number, label?: string] = [40.7128, -74.006];
console.log("Location:", location);
console.log("Latitude:", location[0], "Longitude:", location[1], "Label:", location[2] ?? "No label provided");

// A readonly tuple cannot be reassigned or modified.
const rgbColor: readonly [number, number, number] = [255, 128, 0];
console.log("RGB color:", rgbColor);

//multidimensional array
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrix);
console.log("Element at (1,2):", matrix[1][2]); // Accessing element at row 1, column 2 

//tupple array
const coordinates: [number, number][] = [
    [34.0522, -118.2437], // Los Angeles
    [40.7128, -74.0060],  // New York
    [51.5074, -0.1278]    // London
];
console.log("Coordinates:", coordinates);
console.log("First coordinate:", coordinates[0]);   
console.log("Latitude of first coordinate:", coordinates[0][0]);

//for in loop to iterate over array indices
const fruits: string[] = ["Apple", "Banana", "Cherry"];
for (const index in fruits) {
    console.log(`Index ${index}: ${fruits[index]}`);
}

//for of loop to iterate over array values
for (const fruit of fruits) {
    console.log("Fruit:", fruit);
}   