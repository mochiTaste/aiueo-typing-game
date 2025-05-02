export function generatePaList(): string[] {
    const base = ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"];
    return Array(10).fill(base).flat();
}