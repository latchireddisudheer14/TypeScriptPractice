import type { User, UserRole } from "./userTypes";

export function describeUser(user: User, role: UserRole): string {
    return `${user.name} (ID: ${user.id}) has the ${role} role.`;
}
