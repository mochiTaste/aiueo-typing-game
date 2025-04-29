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
                className="px-6 py-3 bg-blue-500 text-white rounded-lg text-xl hover:bg-blue-600"
            >
                あいうえお
            </Link>
        </main>
    );
}
