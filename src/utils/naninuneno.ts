export function generateNaList(): string[] {
    const base = ["な", "に", "ぬ", "ね", "の"];
    return Array(10).fill(base).flat();
}
