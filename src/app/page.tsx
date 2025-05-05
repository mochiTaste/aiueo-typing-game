"use client";
import {useEffect, useRef} from "react";
import {useRouter} from "next/navigation";


export default function Home() {
    const router = useRouter(); // ← 追加
    const bgmRef = useRef<HTMLAudioElement | null>(null);
    const seRef = useRef<HTMLAudioElement | null>(null);

    const handleClick = (path: string) => {
        if (seRef.current) {
            seRef.current.currentTime = 0;
            seRef.current.play();
        }
        setTimeout(() => {
            router.push(path);
        }, 400); // 音を鳴らしてから遷移
    };

    const btnBase = "px-6 py-3 rounded-xl text-white text-lg font-semibold text-white transition text-center";
    const styleMap = {
        aiueo: "bg-rose-400 hover:bg-rose-500",
        kakikukeko: "bg-emerald-300 hover:bg-emerald-400",
        sasisuseso: "bg-sky-300 hover:bg-sky-400",
        tatituteto: "bg-pink-400 hover:bg-pink-500",
        naninuneno: "bg-cyan-300 hover:bg-cyan-400",
        hahifuheho: "bg-orange-300 hover:bg-orange-400",
        mamimumemo: "bg-teal-300 hover:bg-teal-400",
        rarirurero: "bg-violet-300 hover:bg-violet-400",
        yayuyowawo: "bg-purple-300 hover:bg-purple-400",
        gagigugego: "bg-lime-400 hover:bg-lime-500",
        zajizuzezo: "bg-indigo-300 hover:bg-indigo-400",
        dadidudedo: "bg-fuchsia-300 hover:bg-fuchsia-400",
        babibubebo: "bg-blue-300 hover:bg-blue-400",
        papipupepo: "bg-amber-300 hover:bg-amber-400",
        lalilulelo: "bg-neutral-300 hover:bg-neutral-400",
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
                <button onClick={() => handleClick("/typing/aiueo")}
                        className={`btn ${btnBase} ${styleMap.aiueo}`}>あいうえお
                </button>
                <button onClick={() => handleClick("/typing/kakikukeko")}
                        className={`btn ${btnBase} ${styleMap.kakikukeko}`}>かきくけこ
                </button>
                <button onClick={() => handleClick("/typing/sasisuseso")}
                        className={`btn ${btnBase} ${styleMap.sasisuseso}`}>さしすせそ
                </button>
                <button onClick={() => handleClick("/typing/tatituteto")}
                        className={`btn ${btnBase} ${styleMap.tatituteto}`}>たちつてと
                </button>
                <button onClick={() => handleClick("/typing/naninuneno")}
                        className={`btn ${btnBase} ${styleMap.naninuneno}`}>なにぬねの
                </button>
                <button onClick={() => handleClick("/typing/hahihuheho")}
                        className={`btn ${btnBase} ${styleMap.hahifuheho}`}>はひふへほ
                </button>
                <button onClick={() => handleClick("/typing/mamimumemo")}
                        className={`btn ${btnBase} ${styleMap.mamimumemo}`}>まみむめも
                </button>
                <button onClick={() => handleClick("/typing/rarirurero")}
                        className={`btn ${btnBase} ${styleMap.rarirurero}`}>らりるれろ
                </button>
                <button onClick={() => handleClick("/typing/yayuyowawo")}
                        className={`btn ${btnBase} ${styleMap.yayuyowawo}`}>やゆよわを
                </button>
                <button onClick={() => handleClick("/typing/gagigugego")}
                        className={`btn ${btnBase} ${styleMap.gagigugego}`}>がぎぐげご
                </button>
                <button onClick={() => handleClick("/typing/zajizuzezo")}
                        className={`btn ${btnBase} ${styleMap.zajizuzezo}`}>ざじずぜぞ
                </button>
                <button onClick={() => handleClick("/typing/dadidudedo")}
                        className={`btn ${btnBase} ${styleMap.dadidudedo}`}>だぢづでど
                </button>
                <button onClick={() => handleClick("/typing/babibubebo")}
                        className={`btn ${btnBase} ${styleMap.babibubebo}`}>ばびぶべぼ
                </button>
                <button onClick={() => handleClick("/typing/papipupepo")}
                        className={`btn ${btnBase} ${styleMap.papipupepo}`}>ぱぴぷぺぽ
                </button>
                <button onClick={() => handleClick("/typing/lalilulelo")}
                        className={`btn ${btnBase} ${styleMap.lalilulelo}`}>ぁぃぅぇぉ
                </button>
            </div>


            <p className="text-sm text-gray-400 mt-12">
                © 2025 Kaeroute / 勝浦友之. All rights reserved.
            </p>
            <div className="fixed top-4 left-4 text-xs text-gray-400">
                Escキーでメニューに戻る
            </div>


            <audio ref={bgmRef} src="/top_bgm.mp3"/>
            <audio ref={seRef} src="/button.mp3"/>
        </main>
    );
}
