"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

function ResultPageContent() {
    const params = useSearchParams();
    const mistakes = params.get("mistakes");
    const time = params.get("time");
    const router = useRouter();

    const timeInSeconds = time ? (Number(time) / 1000).toFixed(2) : "0.00";
    const from = params.get("from") || "typing/aiueo"; // fallback付き
    function getTypingLabel(from: string): string {
        switch (from) {
            case "typing/aiueo":
                return "あいうえお";
            case "typing/kakikukeko":
                return "かきくけこ";
            case "typing/sasisuseso":
                return "さしすせそ";
            case "typing/tatituteto":
                return "たちつてと";
            case "typing/naninuneno":
                return "なにぬねの";
            case "typing/hahifuheho":
                return "はひふへほ";
            case "typing/mamimumemo":
                return "まみむめも";
            case "typing/rarirurero":
                return "らりるれろ";
            case "typing/yayuyowawo":
                return "やゆよわを";
            case "typing/gagigugego":
                return "がぎぐげご";
            case "typing/zajizuzezo":
                return "ざじずぜぞ";
            case "typing/dadidudedo":
                return "だぢづでど";
            case "typing/babibubebo":
                return "ばびぶべぼ";
            case "typing/papopupepo":
                return "ぱぴぷぺぽ";
            case "typing/lalilulelo":
                return "ぁぃぅぇぉ";
            default:
                return "あいうえお";
        }
    }

    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-gray-800">
            <h1 className="text-4xl font-semibold tracking-tight mb-6">
                結果発表 🎉
            </h1>
            <h2 className="text-lg text-gray-500 mb-4">
                {getTypingLabel(from)}
            </h2>

            <div className="text-lg sm:text-xl space-y-2 mb-8">
                <p>
                    <span className="font-medium text-gray-600">ミス回数：</span>
                    <span className="font-bold text-red-600 text-xl">{mistakes} 回</span>
                </p>
                <p>
                    <span className="font-medium text-gray-600">タイム：</span>
                    <span className="font-bold text-blue-600 text-xl">{timeInSeconds} 秒</span>
                </p>
            </div>

            <div className="flex gap-4">
                <button
                    className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium text-base hover:bg-blue-700 transition"
                    onClick={() => router.push("/")}
                >
                    トップへ戻る
                </button>
                <button
                    className="px-5 py-2 rounded-xl bg-green-600 text-white font-medium text-base hover:bg-green-700 transition"
                    onClick={() => router.push(`/${from}`)}
                >
                    もう一度
                </button>
            </div>
        </main>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResultPageContent />
        </Suspense>
    );
}
