export function generateYaList(): string[] {
    const base = ["や", "ゆ", "よ", "わ","を"];
    return Array(10).fill(base).flat();
}