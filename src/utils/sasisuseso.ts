export function generateSaList(): string[] {
    const base = ["さ", "し", "す", "せ", "そ"];
    return Array(10).fill(base).flat();
}