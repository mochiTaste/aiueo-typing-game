export function generateHaList(): string[] {
    const base = ["は", "ひ", "ふ", "へ", "ほ"];
    return Array(10).fill(base).flat();
}