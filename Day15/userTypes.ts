// `export type` makes a type available to other modules.
export interface User {
    id: number;
    name: string;
}

export type UserRole = "admin" | "editor" | "viewer";
