export function generateBaList(): string[] {
    const base = ["ば", "び", "ぶ", "べ", "ぼ"];
    return Array(10).fill(base).flat();
}
