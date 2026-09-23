"use client";

import { useState } from "react";
import { skills } from "@/lib/cv-data";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";

export function SkillsSelector() {
  const [active, setActive] = useState(0);
  const s = skills[active];

  return (
    <div className="space-y-6">
      {/* Main active skill — minimal modern clean */}
      <Card className="overflow-hidden border-white/[0.06] bg-[#131A2E]">
        <div className="h-1 bg-gradient-to-r from-[#6366F1] to-[#A78BFA]" />
        <CardContent className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <Badge variant={s.color === "teal" ? "teal" : "accent"}>{s.category}</Badge>
              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{s.name}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </div>
            <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-sm font-black text-slate-900">{s.level}%</span>
          </div>
          <div className="mt-6">
            <Progress value={s.level} barClassName={s.color === "teal" ? "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]" : "bg-gradient-to-r from-[#6366F1] to-[#A78BFA] shadow-[0_0_12px_rgb(99_102_241/0.5)]"} />
            <div className="mt-2 flex justify-between text-xs text-slate-500"><span>Beginner</span><span>Expert</span></div>
          </div>
        </CardContent>
      </Card>

      {/* Horizontal nav — small pills, scrollable + infinite marquee */}
      <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#131A2E]/60 backdrop-blur py-3">
        <div className="flex w-max items-center gap-2 animate-marquee hover:[animation-play-state:paused] will-change-transform" style={{ animation: "marquee 40s linear infinite" } as React.CSSProperties}>
          {Array.from({ length: 4 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-2 shrink-0">
              {skills.map((sk, i) => (
                <button
                  key={`${sk.name}-${dup}-${i}`}
                  onClick={() => setActive(i)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold tracking-tight transition-all duration-300 ${
                    i === active
                      ? "bg-white text-slate-900 shadow"
                      : "bg-white/[0.06] text-slate-400 border border-white/10 hover:bg-white/[0.10] hover:text-white"
                  }`}
                >
                  {sk.name}
                </button>
              ))}
              <span className="px-2 text-slate-600">•</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-slate-500">Tap skill di atas untuk melihat detail • Hover untuk pause marquee</p>
    </div>
  );
}
