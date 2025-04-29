"use client";

import { useState, useEffect } from "react";
import { generateAiueoList } from "@/utils/aiueo";
import { useRouter } from "next/navigation";

export default function TypingPage() {
    const router = useRouter();
    const [isStarted, setIsStarted] = useState(false);
    const [index, setIndex] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [startTime, setStartTime] = useState<number | null>(null);
    const [chars, setChars] = useState<string[]>([]);
    const [currentChar, setCurrentChar] = useState<string>("");

    useEffect(() => {
        const list = generateAiueoList();
        setChars(list);
        setCurrentChar(list[0]);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isStarted) {
                if (e.code === "Space") {
                    e.preventDefault();
                    setIsStarted(true);
                    setStartTime(Date.now());
                }
            } else {
                const expected = currentChar;
                if (e.key.toLowerCase() === toAlphabet(expected).toLowerCase()) {
                    const nextIndex = index + 1;
                    if (nextIndex >= chars.length) {
                        const endTime = Date.now();
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
        <main className="flex flex-col items-center justify-center min-h-screen text-center">
            <div className="text-8xl mb-8">{currentChar}</div>
            <div className="text-2xl">{toAlphabet(currentChar).toUpperCase()}</div>
            <div className="text-xl">{toAlphabet(currentChar).toLowerCase()}</div>
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
