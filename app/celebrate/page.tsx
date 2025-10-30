"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ConfettiPiece = {
  left: string;
  color: string;
  delay: string;
  duration: string;
};

export default function CelebratePage() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  const colors = useMemo(
    () => ["#ff6a88", "#ffd166", "#6ee7b7", "#60a5fa", "#f472b6", "#f59e0b"],
    []
  );

  useEffect(() => {
    const count = 120;
    const generated: ConfettiPiece[] = Array.from({ length: count }).map(() => ({
      left: `${Math.random() * 100}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: `${Math.random() * 2}s`,
      duration: `${3 + Math.random() * 3}s`,
    }));
    setPieces(generated);
  }, [colors]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center gap-6 py-20 px-6 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold">Happy Birthday! 🎂🎈</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Wishing you a day filled with love, joy, and surprises. Have an amazing year ahead!
        </p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-full border px-6 py-3 text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          Back to gift
        </Link>
      </main>

      <div className="confetti-container" aria-hidden>
        {pieces.map((p, i) => (
          <span
            key={i}
            className="confetti-piece"
            style={{
              left: p.left,
              background: p.color,
              animationDelay: p.delay as string,
              animationDuration: p.duration as string,
            }}
          />
        ))}
      </div>
    </div>
  );
}


