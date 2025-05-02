export function generateLaList(): string[] {
    const base = ["ぁ", "ぃ", "ぅ", "ぇ", "ぉ"];
    return Array(10).fill(base).flat();
}