export function toRomaji(char: string): string {
    const map: Record<string, string> = {
        か: "ka", き: "ki", く: "ku", け: "ke", こ: "ko",
        さ: "sa", し: "si", す: "su", せ: "se", そ: "so",
        た: "ta", ち: "ti", つ: "tu", て: "te", と: "to",
        な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no",
        は: "ha", ひ: "hi", ふ: "fu", へ: "he", ほ: "ho",
        ま: "ma", み: "mi", む: "mu", め: "me", も: "mo",
        や: "ya", ゆ: "yu", よ: "yo", わ: "wa", を: "wo",
        ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro",
        が: "ga", ぎ: "gi", ぐ: "gu", げ: "ge", ご: "go",
        ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo",
        だ: "da", ぢ: "di", づ: "du", で: "de", ど: "do",
        ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo",
        ぱ: "pa", ぴ: "pi", ぷ: "pu", ぺ: "pe", ぽ: "po",
        ぁ: "la", ぃ: "li", ぅ: "lu", ぇ: "le", ぉ: "lo",
        // 既存：かきくけこ、あいうえおも残す
    };
    return map[char] || "";
}
