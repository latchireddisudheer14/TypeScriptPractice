// if / else checks whether a student passed.
const score: number = 82;

if (score >= 50) {
    console.log("You passed.");
} else {
    console.log("You did not pass.");
}

// else if selects one result from several conditions.
const temperature: number = 28;

if (temperature >= 35) {
    console.log("The weather is hot.");
} else if (temperature >= 20) {
    console.log("The weather is warm.");
} else {
    console.log("The weather is cool.");
}

// A nested condition checks another requirement after the first one passes.
const age: number = 19;
const hasId: boolean = true;

if (age >= 18) {
    if (hasId) {
        console.log("Entry allowed.");
    } else {
        console.log("Please show your ID.");
    }
} else {
    console.log("You must be at least 18.");
}

// switch selects a case based on the value of a variable.
const dayNumber: number = 3;
let dayName: string;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    default:
        dayName = "Weekend or invalid day";
}

console.log("Day:", dayName);
