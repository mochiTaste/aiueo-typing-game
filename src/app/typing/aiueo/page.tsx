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
    const [isPerfect, setIsPerfect] = useState(false);

    const bgmRef = useRef<HTMLAudioElement | null>(null);
    const seRef = useRef<HTMLAudioElement | null>(null);
    const perfectRef = useRef<HTMLAudioElement | null>(null);

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

                        if (mistakes === 0) {
                            setIsPerfect(true);
                            if (perfectRef.current) {
                                perfectRef.current.currentTime = 0;
                                perfectRef.current.play().catch((e) => {
                                    console.warn("perfect.mp3 再生失敗:", e.message);
                                });
                            }
                            setTimeout(() => {
                                if (bgmRef.current) {
                                    bgmRef.current.pause();
                                    bgmRef.current.currentTime = 0;
                                }
                                router.push(`/result?mistakes=0&time=${endTime - (startTime || 0)}&from=typing/aiueo`);
                            }, 1500);
                        } else {
                            if (bgmRef.current) {
                                bgmRef.current.pause();
                                bgmRef.current.currentTime = 0;
                            }
                            router.push(`/result?mistakes=${mistakes}&time=${endTime - (startTime || 0)}&from=typing/aiueo`);
                        }
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
            {isPerfect && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
                    <h2 className="text-5xl font-bold text-green-600 drop-shadow-md animate-pulse">
                        ノーミス!! 🎉
                    </h2>
                </div>
            )}

            <div className="mb-8">

                <div className="text-8xl sm:text-9xl font-bold tracking-tight drop-shadow-md bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">
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
            <audio ref={perfectRef} src="/perfect.mp3" />

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
