export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/[0.06] bg-[#0B1020]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/15 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-bold tracking-tight text-white">Toni Ilham Hermawan, S.Kom.</p>
            <p className="mt-1 text-xs text-slate-500">Information Systems Graduate • Futuristic Developer Portfolio</p>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Toni Ilham Hermawan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
