"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function ResultPage() {
    const params = useSearchParams();
    const mistakes = params.get("mistakes");
    const time = params.get("time");
    const router = useRouter();

    return (
        <main className="flex flex-col items-center justify-center min-h-screen text-center gap-4">
            <h1 className="text-3xl font-bold">リザルト</h1>
            <p>ミス回数: {mistakes}回</p>
            <p>タイム: {Number(time) / 1000} 秒</p>
            <button
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg text-xl hover:bg-blue-600"
                onClick={() => router.push("/")}
            >
                トップへ戻る
            </button>
        </main>
    );
}
