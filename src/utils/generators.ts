/**
 * Generate random hexadecimal string
 * @param length - Number of bytes to generate
 * @returns Space-separated hex string
 */
export function generateHex(length: number): string {
    return Array.from({ length }, () =>
        Math.floor(Math.random() * 256)
            .toString(16)
            .toUpperCase()
            .padStart(2, '0')
    ).join(' ');
}

/**
 * Generate random CAN bus ID
 * @returns Random CAN ID in hex format
 */
export function generateCanId(): string {
    const ids = ['0x1A0', '0x2B4', '0x4F2', '0x3D1', '0x7E8', '0x0C9'];
    return ids[Math.floor(Math.random() * ids.length)] ?? '0x000';
}

/**
 * Generate random ID string
 * @returns Random alphanumeric ID
 */
export function generateId(): string {
    return Math.random().toString(36).substring(2, 11);
}
