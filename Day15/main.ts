// Import named exports with their names, or rename them with `as`.
import { add, calculateCircleArea, PI as circleConstant } from "./mathUtils";
// Import a default export without curly braces.
import greet from "./greeting";
import { describeUser } from "./index";
import type { User, UserRole } from "./index";

console.log("Addition:", add(4, 6));
console.log("Circle constant:", circleConstant);
console.log("Circle area:", calculateCircleArea(3));
console.log(greet("Asha"));

const user: User = { id: 1, name: "Ravi" };
const role: UserRole = "editor";
console.log(describeUser(user, role));
