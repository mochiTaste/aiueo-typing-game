export function generateGaList(): string[] {
    const base = ["が", "ぎ", "ぐ", "げ", "ご"];
    return Array(10).fill(base).flat();
}