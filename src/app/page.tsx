import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-3xl font-bold">タイピングゲーム</h1>
            <Link
                href="/typing/aiueo"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg text-xl hover:bg-blue-600"
            >
                あいうえお
            </Link>
        </main>
    );
}
