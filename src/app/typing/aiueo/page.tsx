"use client";

import {useState, useEffect, useRef} from "react";
import {generateAiueoList} from "@/utils/aiueo";
import {useRouter} from "next/navigation";

export default function TypingPage() {
    const router = useRouter();
    const [isStarted, setIsStarted] = useState(false);
    const [index, setIndex] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [startTime, setStartTime] = useState<number | null>(null);
    const [chars, setChars] = useState<string[]>([]);
    const [currentChar, setCurrentChar] = useState<string>("");

    const bgmRef = useRef<HTMLAudioElement | null>(null);
    const seRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const list = generateAiueoList();
        setChars(list);
        setCurrentChar(list[0]);

        // BGMを設定（ループ再生）
        if (bgmRef.current) {
            bgmRef.current.loop = true;
        }
    }, []);


    useEffect(() => {
        if (isStarted && bgmRef.current) {
            console.log("▶ BGM再生開始");
            bgmRef.current.volume = 0.5;
            bgmRef.current.currentTime = 0;
            bgmRef.current.play().catch((e) => {
                console.error("BGM 再生失敗:", e.message);
            });
        }
    }, [isStarted]);


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isStarted) {
                // ✅ スペースキーで isStarted を true にするだけ
                if (e.code === "Space") {
                    e.preventDefault();
                    console.log("🎯 スペースキー押された");
                    setIsStarted(true);
                    setStartTime(Date.now());
                }


            } else {
                const expected = currentChar;
                if (e.key.toLowerCase() === toAlphabet(expected).toLowerCase()) {

                    // ✔ 正解SEの再生（エラー回避）
                    if (seRef.current) {
                        seRef.current.currentTime = 0;
                        seRef.current.play();
                    }

                    const nextIndex = index + 1;
                    if (nextIndex >= chars.length) {
                        const endTime = Date.now();

                        // ✔ BGM停止処理もif文で
                        if (bgmRef.current) {
                            bgmRef.current.pause();
                            bgmRef.current.currentTime = 0;
                        }
                        router.push(`/result?mistakes=${mistakes}&time=${endTime - (startTime || 0)}`);
                    } else {
                        setIndex(nextIndex);
                        setCurrentChar(chars[nextIndex]);
                    }
                } else {
                    setMistakes((prev) => prev + 1);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isStarted, index, chars, currentChar, mistakes, startTime, router]);

    if (!isStarted) {
        return (
            <main className="flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-2xl mb-4">スペースキーでスタート</h1>
            </main>
        );
    }

    return (
        <main
            className="flex flex-col items-center justify-center min-h-screen text-center bg-white px-4 text-gray-800">
            <div className="mb-8">
                <div className="text-8xl sm:text-9xl font-bold tracking-tight drop-shadow-md
                  bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600
                  bg-clip-text text-transparent">
                    {currentChar}
                </div>
                <div className="text-xl text-gray-600 mt-4 uppercase">
                    {toAlphabet(currentChar).toUpperCase()}
                </div>
                <div className="text-base text-gray-400 lowercase">
                    {toAlphabet(currentChar).toLowerCase()}
                </div>
            </div>


            <audio ref={bgmRef} src="/game_bgm.mp3"/>
            <audio ref={seRef} src="/typing_sound.mp3"/>

        </main>
    );

}

function toAlphabet(char: string): string {
    const mapping: Record<string, string> = {
        あ: "a",
        い: "i",
        う: "u",
        え: "e",
        お: "o",
    };
    return mapping[char] || "";
}
