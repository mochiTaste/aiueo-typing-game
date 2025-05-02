export function generateMaList(): string[] {
    const base = ["ま", "み", "む", "め", "も"];
    return Array(10).fill(base).flat();
}