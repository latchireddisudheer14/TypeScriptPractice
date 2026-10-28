const message: string = "  TypeScript makes string handling easier.  ";

// length returns the number of characters in a string.
console.log("Length:", message.length);

// trim removes whitespace from the beginning and end.
const trimmedMessage: string = message.trim();
console.log("Trimmed:", trimmedMessage);

// toUpperCase and toLowerCase change the letter casing.
console.log("Uppercase:", trimmedMessage.toUpperCase());
console.log("Lowercase:", trimmedMessage.toLowerCase());

// includes, startsWith, and endsWith check for text in a string.
console.log("Includes 'string':", trimmedMessage.includes("string"));
console.log("Starts with 'TypeScript':", trimmedMessage.startsWith("TypeScript"));
console.log("Ends with a period:", trimmedMessage.endsWith("."));

// indexOf returns the first position of matching text, or -1 if not found.
console.log("Position of 'makes':", trimmedMessage.indexOf("makes"));

// slice returns part of a string without changing the original.
console.log("First 10 characters:", trimmedMessage.slice(0, 10));

// replace returns a new string with the first matching text replaced.
const updatedMessage: string = trimmedMessage.replace("easier", "simple");
console.log("Replaced:", updatedMessage);

// split divides a string into an array using a separator.
const words: string[] = trimmedMessage.split(" ");
console.log("Words:", words);

// concat joins strings and returns the combined result.
const greeting: string = "Hello".concat(", ", "TypeScript", "!");
console.log("Concatenated:", greeting);

// repeat returns a string repeated a specified number of times.
console.log("Repeated:", "ha".repeat(3));

//substring returns a part of the string between two indices.
console.log("Substring (5, 15):", trimmedMessage.substring(5, 15));

// charAt returns the character at a specific index.
console.log("Character at index 10:", trimmedMessage.charAt(10));

//includes checks if a string contains a specific substring.
console.log("Includes 'handling':", trimmedMessage.includes("handling"));
