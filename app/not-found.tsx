"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] relative font-sans text-[#1D1D1F] flex items-center justify-center px-6">
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <section className="relative z-10 w-full max-w-xl">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-[0_18px_60px_rgba(0,0,0,0.06)] px-6 sm:px-10 py-10 sm:py-12 flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-primary text-[11px] font-extrabold tracking-[0.16em] uppercase">
            404 • Page not found
          </span>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
            This vibe doesn&apos;t exist.
          </h1>

          <p className="text-sm sm:text-base text-gray-500 max-w-md">
            The link you opened doesn&apos;t match any page on WhapVibez. It may have been moved,
            removed, or the URL might be a typo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4 w-full">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl bg-gray-900 text-white px-6 py-2.5 text-sm font-semibold hover:bg-black transition-all transform hover:scale-105 shadow-md"
            >
              Back to homepage
            </Link>
            <button
              type="button"
              onClick={() => (typeof window !== "undefined" ? window.history.back() : null)}
              className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-800 px-6 py-2.5 text-sm font-semibold hover:bg-gray-50 transition-all"
            >
              Go to previous page
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

