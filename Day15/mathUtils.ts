// Named exports can be imported by their exported names.
export const PI: number = 3.14159;

export function add(first: number, second: number): number {
    return first + second;
}

export function calculateCircleArea(radius: number): number {
    return PI * radius * radius;
}
