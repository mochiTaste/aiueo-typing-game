export function generateDaList(): string[] {
    const base = ["だ", "ぢ", "づ", "で", "ど"];
    return Array(10).fill(base).flat();
}