export function generateList(base: string[]): string[] {
  return Array.from({ length: 10 }, () => base).flat();
}

export const generateAList = () => generateList(["あ", "い", "う", "え", "お"]);
export const generateKaList = () => generateList(["か", "き", "く", "け", "こ"]);
export const generateSaList = () => generateList(["さ", "し", "す", "せ", "そ"]);
export const generateTaList = () => generateList(["た", "ち", "つ", "て", "と"]);
export const generateNaList = () => generateList(["な", "に", "ぬ", "ね", "の"]);
export const generateHaList = () => generateList(["は", "ひ", "ふ", "へ", "ほ"]);
export const generateMaList = () => generateList(["ま", "み", "む", "め", "も"]);
export const generateYaList = () => generateList(["や", "ゆ", "よ", "わ", "を"]);
export const generateRaList = () => generateList(["ら", "り", "る", "れ", "ろ"]);
export const generateGaList = () => generateList(["が", "ぎ", "ぐ", "げ", "ご"]);
export const generateZaList = () => generateList(["ざ", "じ", "ず", "ぜ", "ぞ"]);
export const generateDaList = () => generateList(["だ", "ぢ", "づ", "で", "ど"]);
export const generateBaList = () => generateList(["ば", "び", "ぶ", "べ", "ぼ"]);
export const generatePaList = () => generateList(["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"]);
export const generateLaList = () => generateList(["ぁ", "ぃ", "ぅ", "ぇ", "ぉ"]);

export function generateListByCourse(course: string): string[] {
  switch (course) {
    case "aiueo":
      return generateAList();
    case "kakikukeko":
      return generateKaList();
    case "sasisuseso":
      return generateSaList();
    case "tatituteto":
      return generateTaList();
    case "naninuneno":
      return generateNaList();
    case "hahifuheho":
      return generateHaList();
    case "mamimumemo":
      return generateMaList();
    case "rarirurero":
      return generateRaList();
    case "yayuyowawo":
      return generateYaList();
    case "gagigugego":
      return generateGaList();
    case "zajizuzezo":
      return generateZaList();
    case "dadidudedo":
      return generateDaList();
    case "babibubebo":
      return generateBaList();
    case "papipupepo":
      return generatePaList();
    case "lalilulelo":
      return generateLaList();
    default:
      return generateAList(); // フォールバックとして「あ行」を返す
  }
}
