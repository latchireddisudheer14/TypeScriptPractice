// Add and remove items at the end of an array.
const fruits: string[] = ["apple", "banana"];
fruits.push("cherry");
console.log("After push:", fruits);
const lastFruit: string | undefined = fruits.pop();
console.log("Popped item:", lastFruit, "Remaining:", fruits);

// Add and remove items at the beginning of an array.
fruits.unshift("mango");
console.log("After unshift:", fruits);
const firstFruit: string | undefined = fruits.shift();
console.log("Shifted item:", firstFruit, "Remaining:", fruits);

//concat combines arrays into a new array.
const moreFruits: string[] = ["kiwi", "grape"];
const allFruits: string[] = fruits.concat(moreFruits);
console.log("All fruits:", allFruits);

// slice creates a new array from a portion of an existing array.
const slicedFruits: string[] = allFruits.slice(1, 3);
console.log("Sliced fruits:", slicedFruits);

// splice can add or remove items at a specific index.
const splicedFruits: string[] = [...allFruits];
splicedFruits.splice(2, 1, "pear", "peach");
console.log("Spliced fruits:", splicedFruits);

// map creates a new array by transforming each item.
const prices: number[] = [10, 20, 30];
const discountedPrices: number[] = prices.map((price) => price * 0.9);
console.log("Discounted prices:", discountedPrices);

// filter creates a new array containing items that pass a condition.
const scores: number[] = [45, 72, 88, 39, 95];
const passingScores: number[] = scores.filter((score) => score >= 50);
console.log("Passing scores:", passingScores);

// find returns the first item that passes a condition, or undefined.
const firstHighScore: number | undefined = scores.find((score) => score >= 90);
console.log("First score of 90 or more:", firstHighScore);

// reduce combines array items into one value.
const totalScore: number = scores.reduce((total, score) => total + score, 0);
console.log("Total score:", totalScore);

// forEach runs a callback for each item without creating a new array.
scores.forEach((score, index) => {
    console.log(`Score ${index + 1}: ${score}`);
});

// includes checks whether an array contains a value.
console.log("Has score 88:", scores.includes(88));

// indexOf returns the first index of a value, or -1 if it is not found.
const scoreIndex: number = scores.indexOf(88);
console.log("Index of score 88:", scoreIndex);
console.log("Index of score 100:", scores.indexOf(100)); // -1 means not found

// sort orders a copied array numerically without changing the original.
const sortedScores: number[] = [...scores].sort((first, second) => first - second);
console.log("Sorted scores:", sortedScores);
