import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const mockData = {
  name: "Budi Santoso",
  title: "Product Designer",
  contact: "budi@email.com • +62 812-3456-7890 • Jakarta",
  summary:
    "Product designer dengan 5+ tahun pengalaman membangun produk digital yang clean, ATS-friendly, dan berfokus pada konversi.",
  experiences: [
    {
      role: "Senior Product Designer — Tokopedia",
      period: "2022 — Sekarang",
      desc: "Memimpin desain design system, meningkatkan konsistensi UI 40% dan mempercepat handoff ke engineer.",
    },
    {
      role: "UI Designer — Startup XYZ",
      period: "2019 — 2022",
      desc: "Mendesain aplikasi mobile dengan 500k+ pengguna aktif, rating 4.8 di Play Store.",
    },
  ],
  education: [{ school: "Universitas Indonesia — S1 Desain Komunikasi Visual", period: "2015 — 2019" }],
  skills: ["Figma", "Design System", "UX Research", "Tailwind", "Next.js"],
};

export function CvPreview() {
  return (
    <Card className="overflow-hidden p-0">
      {/* Header CV */}
      <div className="bg-[var(--primary)] px-6 py-6 text-white sm:px-8">
        <h2 className="text-2xl font-bold tracking-tight">{mockData.name}</h2>
        <p className="mt-1 text-sm text-white/80">{mockData.title}</p>
        <p className="mt-3 text-xs text-white/60">{mockData.contact}</p>
      </div>

      <div className="space-y-6 p-6 sm:p-8">
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Ringkasan
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
            {mockData.summary}
          </p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Pengalaman
          </h3>
          <div className="mt-3 space-y-4">
            {mockData.experiences.map((exp) => (
              <div key={exp.role} className="border-l-2 border-[var(--accent-subtle)] pl-4">
                <p className="text-sm font-semibold">{exp.role}</p>
                <p className="text-xs text-[var(--muted-foreground)]">{exp.period}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Pendidikan
          </h3>
          <div className="mt-3">
            {mockData.education.map((edu) => (
              <div key={edu.school}>
                <p className="text-sm font-medium">{edu.school}</p>
                <p className="text-xs text-[var(--muted-foreground)]">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Keahlian
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {mockData.skills.map((s) => (
              <Badge key={s} variant="teal">
                {s}
              </Badge>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-[var(--muted)] px-6 py-3 text-center text-xs text-[var(--muted-foreground)]">
        Preview — Template Profesional (Opsi A) • Siap cetak & ATS
      </div>
    </Card>
  );
}
