export function generateTaList(): string[] {
    const base = ["た", "ち", "つ", "て", "と"];
    return Array(10).fill(base).flat();
}