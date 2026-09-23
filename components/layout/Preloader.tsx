"use client";

import { useEffect, useState } from "react";

const phases = [
  "> initializing system...",
  "> loading portfolio...",
  "> compiling assets...",
  "> finalizing build...",
  "> ready ✓",
];

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [phase, setPhase] = useState(phases[0]);

  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const duration = 3500;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const p = Math.min(100, Math.round((elapsed / duration) * 100));
      const eased = 100 * (1 - Math.pow(1 - p / 100, 3));
      const val = Math.round(eased);
      setProgress(val);
      if (val < 20) setPhase(phases[0]);
      else if (val < 45) setPhase(phases[1]);
      else if (val < 70) setPhase(phases[2]);
      else if (val < 95) setPhase(phases[3]);
      else setPhase(phases[4]);
      if (elapsed < duration) {
        raf = requestAnimationFrame(step);
      } else {
        setProgress(100);
        setPhase(phases[4]);
        setTimeout(() => setFading(true), 300);
        setTimeout(() => setVisible(false), 850);
      }
    };
    raf = requestAnimationFrame(step);

    const safety = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 500);
    }, 5000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B1020] transition-all duration-700 ease-out ${
        fading ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[#6366F1]/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/[0.04] via-transparent to-[#8B5CF6]/[0.04]" />

      {/* Tulisan WELLCOME — animasi keren */}
      <div className="relative" style={{ animation: "preloaderScale 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both" }}>
        <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/15 blur-2xl opacity-60" />
        <h1 className="relative flex justify-center gap-[2px] text-4xl font-black tracking-[0.12em] sm:text-5xl">
          {"WELLCOME".split("").map((ch, i) => (
            <span
              key={i}
              className="gradient-text inline-block"
              style={{ animation: `wellcomeWave 1.2s ease-in-out ${i * 0.08}s infinite`, display: "inline-block" }}
            >
              {ch}
            </span>
          ))}
        </h1>
        <div className="mx-auto mt-3 h-[2px] w-24 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 bg-gradient-to-r from-[#6366F1] via-white to-[#8B5CF6]" style={{ animation: "wellcomeLine 1.4s ease-in-out infinite" }} />
        </div>
      </div>

      <div className="mt-5 text-center" style={{ animation: "preloaderFadeUp 0.6s ease-out 0.35s both" }}>
        <p className="text-sm font-bold tracking-[0.18em] text-white">TONI ILHAM HERMAWAN</p>
        <p className="mt-1 text-xs font-semibold tracking-[0.22em] text-slate-400">PORTFOLIO</p>
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-emerald-500 shadow shadow-emerald-500/50 animate-pulse" />
        <span className="font-mono text-xs tracking-wide text-slate-300">{phase}</span>
        <span className="h-4 w-[2px] bg-slate-400 animate-pulse" />
      </div>

      <div className="mt-6 w-64 sm:w-80">
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06] p-0.5">
          <div className="h-full rounded-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A78BFA] shadow-[0_0_16px_rgb(99_102_241/0.6)] relative overflow-hidden" style={{ width: `${progress}%` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full" style={{ animation: "preloaderShimmer 1s ease-in-out infinite" }} />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[11px] font-medium tracking-[0.16em] text-slate-500">LOADING</span>
          <span className="text-sm font-black tabular-nums text-white tracking-tight" style={{ transform: progress === 100 ? "scale(1.08)" : "scale(1)", transition: "transform 0.3s ease" }}>{progress}%</span>
        </div>
      </div>

      <style>{`
        @keyframes preloaderScale { 0% { opacity: 0; transform: scale(0.8) rotate(-4deg); } 100% { opacity: 1; transform: scale(1) rotate(0); } }
        @keyframes preloaderFadeUp { 0% { opacity: 0; transform: translateY(8px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes preloaderPulse { 0%,100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes preloaderShimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
        @keyframes wellcomeWave { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes wellcomeLine { 0% { transform: translateX(-100%); } 100% { transform: translateX(250%); } }
      `}</style>
    </div>
  );
}
