export function toRomaji(char: string): string {
    const map: Record<string, string> = {
        か: "ka",
        き: "ki",
        く: "ku",
        け: "ke",
        こ: "ko",
    };
    return map[char] || "";
}
