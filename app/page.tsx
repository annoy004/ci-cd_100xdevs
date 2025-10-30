"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center gap-10 py-20 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">Happy Birthday! 🎉</h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-center max-w-lg">
          Here’s a special gift just for you. Tap the box to open it!
        </p>

        <Link href="/celebrate" className="gift" aria-label="Open your birthday gift">
          <div className="gift-box">
            <div className="ribbon-vertical" />
            <div className="ribbon-horizontal" />
          </div>
          <div className="gift-lid">
            <div className="bow left" />
            <div className="bow right" />
          </div>
        </Link>

        <Link
          href="/celebrate"
          className="mt-4 inline-block rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
        >
          Open your gift xxx
        </Link>
      </main>
    </div>
  );
}
