export function generateRaList(): string[] {
    const base = ["ら", "り", "る", "れ", "ろ"];
    return Array(10).fill(base).flat();
}