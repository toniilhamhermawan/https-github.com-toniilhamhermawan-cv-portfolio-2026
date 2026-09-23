import { profile, personalInfo, bioLong, education, experiences, projects, certificates } from "@/lib/cv-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { Marquee, MarqueeItem } from "@/components/ui/Marquee";
import { SkillsSelector } from "@/components/ui/SkillsSelector";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* About — hero futuristik */}
      <Reveal>
        <section id="about" className="relative overflow-visible rounded-2xl border border-white/[0.06] bg-[#131A2E] shadow-2xl scroll-mt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/[0.08] via-transparent to-[#8B5CF6]/[0.06]" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#6366F1]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
          <div className="relative p-8 sm:p-12 lg:p-14">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shadow shadow-emerald-500/50" /> Available for new opportunities
                </div>
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[52px] leading-[0.9]">
                  Toni Ilham Hermawan, <br />
                </h1>
                <p className="text-base font-bold tracking-[0.14em] text-[#A78BFA] sm:text-sm uppercase">{profile.role}</p>
                <p className="max-w-xl text-sm leading-relaxed text-[#94A3B8] sm:text-[15px]">{profile.about}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="#projects"><Button size="md" className="glow-blue">View Projects</Button></a>
                  <a href="#contact"><Button variant="outline" size="md">Contact Me</Button></a>
                </div>
                <div className="flex items-center gap-4 pt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5"><span className="text-slate-400">📍</span> {profile.location}</span>
                  <span className="h-3 w-px bg-white/10" />
                  <span>{profile.email}</span>
                </div>
              </div>
              <div className="relative mx-auto lg:mx-0 order-1 lg:order-2">
                {/* Glow behind */}
                <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-[#6366F1]/25 to-[#8B5CF6]/20 blur-2xl" />
                {/* Frame tipis */}
                <div className="relative rounded-[20px] border border-white/10 bg-white/[0.02] p-2 shadow-2xl">
                  <div className="overflow-visible rounded-[14px]">
                    <SafeImage
                      src={profile.photo}
                      fallback={profile.photoFallback}
                      alt={profile.name}
                      className="relative w-64 sm:w-72 object-cover shadow-xl"
                      style={{ aspectRatio: '822 / 1214', transform: 'translateY(-14px) scale(1.04)', filter: 'drop-shadow(0 16px 24px rgba(0,0,0,0.45))' }}
                    />
                  </div>
                </div>
                {/* Breakout accent — foto keluar melewati batas atas frame */}
                <div className="absolute -top-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] opacity-60" />
                <div className="absolute -bottom-3 -right-3 rounded-xl border border-white/10 bg-[#131A2E] px-3 py-2 shadow-lg">
                  <p className="text-xs font-bold text-white">Toni Ilham Hermawan</p>
                  <p className="text-[11px] text-slate-400"> Information System • 2022</p>
                </div>
              </div>
            </div>
            {/* Personal info preview */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {personalInfo.slice(0, 4).map((it) => (
                <div key={it.label} className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.04] px-4 py-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-sm">{it.icon}</span>
                  <div><p className="text-xs text-slate-500">{it.label}</p><p className="text-sm font-medium text-slate-200">{it.value}</p></div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">{bioLong}</p>
          </div>
        </section>
      </Reveal>

      {/* Marquee infinite — SYSTEM INFORMATION etc. */}
      <div className="mt-10 overflow-hidden rounded-xl border-y border-white/[0.06] bg-[#131A2E]/60 backdrop-blur py-4">
        <Marquee duration="30s">
          <MarqueeItem className="text-sm font-black tracking-[0.18em] text-[#F8FAFC]">SYSTEM INFORMATION</MarqueeItem>
          <span className="text-[#6366F1]">✦</span>
          <MarqueeItem className="text-sm font-black tracking-[0.18em] text-[#F8FAFC]">WEB DEVELOPMENT</MarqueeItem>
          <span className="text-[#8B5CF6]">✦</span>
          <MarqueeItem className="text-sm font-black tracking-[0.18em] text-[#F8FAFC]">UI/UX</MarqueeItem>
          <span className="text-[#A78BFA]">✦</span>
          <MarqueeItem className="text-sm font-black tracking-[0.18em] text-[#F8FAFC]">DATABASE</MarqueeItem>
          <span className="text-[#6366F1]">✦</span>
        </Marquee>
      </div>

      {/* Education */}
      <Reveal delay={80}>
        <section id="education" className="mt-20 scroll-mt-24">
          <div className="flex items-baseline gap-4">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Education</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-xs font-semibold tracking-widest text-slate-500">01</span>
          </div>
          <p className="mt-2 text-sm text-slate-400">Latar pendidikan formal.</p>
          <div className="mt-8 flex flex-col gap-4">
            {education.map((edu) => (
              <Card key={edu.school} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <span className="hidden h-10 w-10 items-center justify-center rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#818CF8] sm:flex">🎓</span>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-base font-bold text-white">{edu.school}</h4>
                      <p className="text-sm font-medium text-[#A78BFA]">{edu.major}</p>
                      <div className="flex gap-2 pt-2"><Badge variant="accent">{edu.period}</Badge><Badge variant="success">{edu.grade}</Badge></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Experience */}
      <Reveal delay={100}>
        <section id="experience" className="mt-20 scroll-mt-24">
          <div className="flex items-baseline gap-4">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Experience</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-xs font-semibold tracking-widest text-slate-500">02</span>
          </div>
          <p className="mt-2 text-sm text-slate-400">Pengalaman kerja lapangan & profesional.</p>
          <div className="mt-8 flex flex-col gap-4">
            {experiences.map((exp, i) => (
              <Card key={`${exp.company}-${i}`} className="card-hover card-hover-red relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#6366F1] to-[#8B5CF6]" />
                <CardContent className="p-6 pl-7">
                  <h4 className="text-base font-bold text-white">{exp.role} — <span className="text-slate-300">{exp.company}</span></h4>
                  <p className="text-xs text-slate-500 mt-1">{exp.period} • {exp.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{exp.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">{exp.tags.map((t) => (<Badge key={t} variant="accent">{t}</Badge>))}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Skills — interactive selector minimal */}
      <Reveal delay={120}>
        <section id="skills" className="mt-20 scroll-mt-24">
          <div className="flex items-baseline gap-4">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Skills</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-xs font-semibold tracking-widest text-slate-500">03</span>
          </div>
          <div className="mt-8">
            <SkillsSelector />
          </div>
        </section>
      </Reveal>

      {/* Projects */}
      <Reveal delay={140}>
        <section id="projects" className="mt-20 scroll-mt-24">
          <div className="flex items-baseline gap-4">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Projects</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-xs font-semibold tracking-widest text-slate-500">04</span>
          </div>
          <p className="mt-2 text-sm text-slate-400">Karya terpilih — futuristik & fungsional.</p>
          <div className="mt-8 flex flex-col gap-4">
            {projects.map((p) => (
              <Card key={p.title} className="card-hover">
                <CardHeader className="pb-2"><div className="flex items-start justify-between gap-2"><CardTitle className="text-base leading-tight">{p.title}</CardTitle><Badge variant="outline">{p.period}</Badge></div><p className="text-sm text-slate-400">{p.desc}</p></CardHeader>
                <CardContent><div className="flex flex-wrap gap-1.5">{p.tags.map((t) => (<Badge key={t} variant="red">{t}</Badge>))}</div></CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Certificates — foto-only, bingkai dulu, geser horizontal */}
      <Reveal delay={160}>
        <section id="certificates" className="mt-20 scroll-mt-24">
          <div className="flex items-baseline gap-4">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Certificates</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-xs font-semibold tracking-widest text-slate-500">05</span>
          </div>
          <div className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-thin">
            {certificates.map((c) => (
              <div key={c.image} className="shrink-0 snap-start rounded-xl border border-white/10 bg-[#131A2E] p-2 shadow-md card-hover w-[280px] sm:w-[340px]">
                <div className="overflow-hidden rounded-lg border border-white/[0.04] bg-white/[0.03] aspect-[4/3] flex items-center justify-center">
                  <SafeImage src={c.image} fallback={profile.photoFallback} alt={c.alt} className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Contact */}
      <Reveal delay={180}>
        <section id="contact" className="mt-20 scroll-mt-24">
          <div className="flex items-baseline gap-4">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Contact</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-xs font-semibold tracking-widest text-slate-500">06</span>
          </div>
          <p className="mt-2 text-sm text-slate-400">Hubungi saya untuk kolaborasi.</p>
          <Card className="mt-8">
            <CardContent className="p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/10 px-4 py-4 hover:bg-white/[0.06] transition-colors">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6366F1]/10 text-[#6366F1]">✉️</span>
                  <div><p className="text-xs text-slate-500">Email</p><p className="text-sm font-medium text-white">{profile.email}</p></div>
                </a>
                <a href={`tel:${profile.phone}`} className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/10 px-4 py-4 hover:bg-white/[0.06] transition-colors">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]">📞</span>
                  <div><p className="text-xs text-slate-500">Phone</p><p className="text-sm font-medium text-white">{profile.phone}</p></div>
                </a>
                <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/10 px-4 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A78BFA]/10 text-[#A78BFA]">📍</span>
                  <div><p className="text-xs text-slate-500">Location</p><p className="text-sm font-medium text-white">{profile.location}</p></div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`}><Button size="md" className="glow-blue">Send Email →</Button></a>
                <a href={`tel:${profile.phone}`}><Button variant="outline" size="md">Call Now</Button></a>
              </div>
            </CardContent>
          </Card>
        </section>
      </Reveal>
    </div>
  );
}
