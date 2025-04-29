export function generateAiueoList(): string[] {
    const base = ["あ", "い", "う", "え", "お"];
    return Array.from({ length: 10 }, () => base).flat();
}
