import { Rocket, Star } from "lucide-react";
import { useCallback } from "react";

export default function Hero() {
  const scrollToWaitlist = useCallback((e) => {
    e.preventDefault();
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-10 lg:py-28">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-indigo-700">
            <Rocket className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wide">Coming Soon</span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            Stop Selling on Crowded Marketplaces. Get Your Own Beautiful Storefront.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            StoryHost is a simple, all-in-one platform for children’s book authors to sell their books directly to parents. No tech skills required.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
            <a
              href="#waitlist"
              onClick={scrollToWaitlist}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Get Early Access & Updates
            </a>
            <div className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
              <Star className="h-4 w-4 text-amber-500" />
              <span>Loved by creators</span>
            </div>
          </div>
        </div>

        <div className="relative mt-14 w-full max-w-xl flex-1 lg:mt-0">
          <div className="relative mx-auto aspect-[16/10] w-full max-w-xl rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 p-1 shadow-2xl">
            <div className="h-full w-full rounded-2xl bg-white/90 backdrop-blur">
              <div className="flex h-full flex-col items-center justify-center p-8">
                <div className="mb-6 h-2 w-24 rounded-full bg-gray-200" />
                <div className="grid w-full grid-cols-3 gap-3">
                  <div className="col-span-1 rounded-xl bg-indigo-50 p-4 shadow-inner">
                    <div className="h-36 w-full rounded-lg bg-gradient-to-br from-amber-300 to-rose-300" />
                    <div className="mt-3 h-3 w-20 rounded bg-gray-200" />
                    <div className="mt-2 h-3 w-28 rounded bg-gray-100" />
                  </div>
                  <div className="col-span-2 rounded-xl bg-white p-5 shadow-inner">
                    <div className="h-40 w-full rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200" />
                    <div className="mt-4 h-3 w-40 rounded bg-gray-200" />
                    <div className="mt-2 h-3 w-56 rounded bg-gray-100" />
                    <div className="mt-6 h-9 w-40 rounded-lg bg-indigo-600/90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />
        </div>
      </div>
    </header>
  );
}
