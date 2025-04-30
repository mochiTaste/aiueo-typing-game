export function generateKakikukekoList(): string[] {
    const base = ["か", "き", "く", "け", "こ"];
    return Array(10).fill(base).flat();
}
