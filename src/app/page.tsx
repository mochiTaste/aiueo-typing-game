"use client";
import {useEffect, useRef} from "react";
import Link from "next/link";


export default function Home() {
    const bgmRef = useRef<HTMLAudioElement | null>(null);
    const btnBase = "px-6 py-3 rounded-xl text-white text-lg font-semibold text-white transition text-center";
    const styleMap = {
        aiueo:        "bg-rose-400 hover:bg-rose-500",
        kakikukeko:   "bg-emerald-300 hover:bg-emerald-400",
        sasisuseso:   "bg-sky-300 hover:bg-sky-400",
        tatituteto:   "bg-pink-400 hover:bg-pink-500",
        naninuneno:   "bg-cyan-300 hover:bg-cyan-400",
        hahifuheho:   "bg-orange-300 hover:bg-orange-400",
        mamimumemo:   "bg-teal-300 hover:bg-teal-400",
        rarirurero:   "bg-violet-300 hover:bg-violet-400",
        yayuyowawo:   "bg-purple-300 hover:bg-purple-400",
        gagigugego:   "bg-lime-400 hover:bg-lime-500",
        zajizuzezo:   "bg-indigo-300 hover:bg-indigo-400",
        dadidudedo:   "bg-fuchsia-300 hover:bg-fuchsia-400",
        babibubebo:   "bg-blue-300 hover:bg-blue-400",
        papopupepo:   "bg-amber-300 hover:bg-amber-400",
        lalilulelo:   "bg-neutral-300 hover:bg-neutral-400",
    };



    useEffect(() => {
        if (bgmRef.current) {
            bgmRef.current.loop = true;
            bgmRef.current.volume = 0.5;
            bgmRef.current.play().catch((e) => {
                console.warn("トップBGM再生失敗:", e.message);
            });
        }
    }, []);
    return (
        <main className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text
            bg-gradient-to-r from-lime-500 to-emerald-500 drop-shadow-md">
                あいうえおタイピング
            </h1>

            <img src="/frog.png" alt="logo" className="w-64"/>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                <Link href="/typing/aiueo" className={`btn ${btnBase} ${styleMap.aiueo}`}>あいうえお</Link>
                <Link href="/typing/kakikukeko" className={`btn ${btnBase} ${styleMap.kakikukeko}`}>かきくけこ</Link>
                <Link href="/typing/sasisuseso" className={`btn ${btnBase} ${styleMap.sasisuseso}`}>さしすせそ</Link>
                <Link href="/typing/tatituteto" className={`btn ${btnBase} ${styleMap.tatituteto}`}>たちつてと</Link>
                <Link href="/typing/naninuneno" className={`btn ${btnBase} ${styleMap.naninuneno}`}>なにぬねの</Link>
                <Link href="/typing/hahifuheho" className={`btn ${btnBase} ${styleMap.hahifuheho}`}>はひふへほ</Link>
                <Link href="/typing/mamimumemo" className={`btn ${btnBase} ${styleMap.mamimumemo}`}>まみむめも</Link>
                <Link href="/typing/rarirurero" className={`btn ${btnBase} ${styleMap.rarirurero}`}>らりるれろ</Link>
                <Link href="/typing/yayuyowawo" className={`btn ${btnBase} ${styleMap.yayuyowawo}`}>やゆよわを</Link>
                <Link href="/typing/gagigugego" className={`btn ${btnBase} ${styleMap.gagigugego}`}>がぎぐげご</Link>
                <Link href="/typing/zajizuzezo" className={`btn ${btnBase} ${styleMap.zajizuzezo}`}>ざじずぜぞ</Link>
                <Link href="/typing/dadidudedo" className={`btn ${btnBase} ${styleMap.dadidudedo}`}>だぢづでど</Link>
                <Link href="/typing/babibubebo" className={`btn ${btnBase} ${styleMap.babibubebo}`}>ばびぶべぼ</Link>
                <Link href="/typing/papopupepo" className={`btn ${btnBase} ${styleMap.papopupepo}`}>ぱぴぷぺぽ</Link>
                <Link href="/typing/lalilulelo" className={`btn ${btnBase} ${styleMap.lalilulelo}`}>ぁぃぅぇぉ</Link>
            </div>



            <p className="text-sm text-gray-400 mt-12">
                © 2025 Kaeroute / 勝浦友之. All rights reserved.
            </p>


            <audio ref={bgmRef} src="/top_bgm.mp3"/>

        </main>
    );
}
