export function generateZaList(): string[] {
    const base = ["ざ", "じ", "ず", "ぜ", "ぞ"];
    return Array(10).fill(base).flat();
}