import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 drop-shadow-md">
                あいうえおタイピング
            </h1>

            <img src="/frog.png" alt="logo" className="w-64" />
            <Link
                href="/typing/aiueo"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition"
            >
                あいうえお
            </Link>
            <Link
                href="/typing/kakikukeko"
                className="px-6 py-3 rounded-xl bg-purple-600 text-white text-lg font-semibold hover:bg-purple-700 transition"
            >
                かきくけこ
            </Link>


        </main>
    );
}
