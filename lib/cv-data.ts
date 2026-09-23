// ============================================================
// EDIT DI SINI AJA — GAMPANG! (1 FILE UNTUK SEMUA DATA CV)
// ============================================================
// Cara edit: ganti teks di dalam tanda kutip " " saja.
// Contoh: name: "Budi Santoso" -> ganti jadi name: "Nama Kamu"
// Foto: ganti photo jadi "/foto-kamu.jpg" (letakkan file di folder public/)
// Save (Ctrl+S) -> otomatis tampil di Home & Dashboard.
// ============================================================

export const profile = {
  // NAMA LENGKAP — tampil di Hero
  name: "Toni Ilham Hermawan, S.Kom",

  // SUBTITLE HERO
  role: "Information Systems Graduate",

  // FOTO — pakai /foto.jpg (file di public/foto.jpg). Jika file belum ada, otomatis fallback ke avatar.
  // Taruh file JPG asli di public/foto.jpg (jangan rename file.svg jadi foto.jpg)
  photo: "/foto.jpg",
  photoFallback: "https://api.dicebear.com/9.x/initials/svg?seed=TI&backgroundColor=0F2A44,2563EB&textColor=ffffff",

  // LOKASI, EMAIL, HP
  location: "Bandung, Indonesia",
  email: "toniilham1915@gmail.com",
  phone: "+62 8389-4380-928",

  // DESKRIPSI HERO — ketertarikan teknologi & pengembangan sistem
  about:
    "Lulusan Sistem Informasi yang tertarik pada teknologi dan pengembangan sistem — berfokus pada membangun solusi digital yang fungsional, terstruktur, dan berdampak. Menggabungkan kemampuan analisis sistem, pengelolaan data, dan komunikasi untuk menciptakan pengalaman pengguna yang optimal.",

  // STATUS — true = hijau Available, false = abu Busy
  available: true,
};

// --- DATA DIRI (muncul di halaman Data Diri & Dashboard) ---
// Edit value saja. Icon bisa ganti emoji lain.
export const personalInfo = [
  { label: "Nama Lengkap", value: "Toni Ilham Hermawan", icon: "👤" },
  { label: "Tempat, Tgl Lahir", value: "Bandung, 01 April 2004", icon: "📅" },
  { label: "Alamat", value: "Kp. Patrol, RT 01/RW 01", icon: "📍" },
  { label: "Email", value: "toniilham1915@gmail.com", icon: "✉️" },
  { label: "Telepon", value: "+62 8389-4380-928", icon: "📞" },
  { label: "Status", value: "Terbuka untuk peluang baru", icon: "💼" },
];

// DESKRIPSI PANJANG — tampil di Data Diri
export const bioLong =
  "Saya adalah Product Designer yang percaya desain yang baik harus fungsional sekaligus indah. Mulai dari riset pengguna, wireframe, hingga implementasi frontend, saya menikmati proses end-to-end. Saat ini fokus pada design system dan aksesibilitas.";

// --- SKILLS — interactive selector (1 aktif + nav marquee) ---
export const skills = [
  { name: "Microsoft Offcice", level: 90, category: "Desain", color: "accent" as const, desc: "Membangun design system yang konsisten dan scalable untuk produk digital." },
  { name: "Next.js / React", level: 85, category: "Frontend", color: "accent" as const, desc: "Pengembangan aplikasi web modern yang cepat dan terstruktur." },
  { name: "Tailwind CSS", level: 88, category: "Frontend", color: "teal" as const, desc: "Styling cepat dengan utilitas yang clean dan responsif." },
  { name: "UX Research", level: 80, category: "Desain", color: "accent" as const, desc: "Riset pengguna untuk memahami kebutuhan dan perilaku." },
  { name: "TypeScript", level: 75, category: "Frontend", color: "teal" as const, desc: "Penulisan kode yang aman dan terprediksi dengan typing." },
  { name: "Supabase / Backend", level: 70, category: "Backend", color: "accent" as const, desc: "Pengelolaan data dan backend yang terstruktur." },
];

// --- PENDIDIKAN ---
export const education = [
  {
    school: "Universitas Ma'soem",
    major: "S1 Sistem Informasi",
    period: "2022 — 2026",
    grade: "IPK 3.48",
  },
  {
    school: "SMK MA'ARIF TERPADU CICALENGKA",
    major: "JTK",
    period: "2019 — 2022",
    grade: "Nilai Akhir 91",
  },
];

// --- PENGALAMAN KERJA ---
export const experiences = [
  {
    role: "Video Grafher",
    company: "Zone Photowork",
    period: "2019 - Sekarang",
    location: "Bandung",
    desc: "Membangun komunikasi aktif dengan berbagai karakter pelanggan, menangani pelayanan.",
    tags: ["Komunikasi", "Pelayanan",],
  },
  {
    role: "Membuat Aplikasi Penjualan",
    company: "Zafirah Collection",
    period: "2024",
    location: "Sumedang",
    desc: "Mengelola pencatatan transaksi harian, menyusun laporan Keluar masuk barang dan memastikan pengelolaan data terstruktur.",
    tags: ["Administrasi", "Laporan", "Data"],
  },
  {
    role: "Membuat Aplikasi Pengarsipan",
    company: "Desa Nanjung mekar",
    period: "2026",
    location: "Bandung Rancaekek",
    desc: "Mengelola surat masuk dan keluar",
    tags: ["Administrasi", "Laporan", "Data"],
  },
];

// --- PROJECTS ---
export const projects = [
  {
    title: "CV Portfolio Futuristik — Next.js",
    period: "2026",
    desc: "Website portfolio developer modern dark mode dengan blue/red glow, smooth scroll dan 1 halaman vertikal. Dibangun Next.js 16 + Tailwind v4.",
    link: "#",
    tags: ["Next.js", "Tailwind", "Dark UI"],
  },
  {
    title: "Sistem Administrasi Retail",
    period: "2024",
    desc: "Aplikasi pencatatan transaksi harian dan laporan keuangan terstruktur untuk retail — fokus pada akurasi data.",
    link: "#",
    tags: ["Administrasi", "Data", "Laporan"],
  },
];

// --- CERTIFICATES — FOTO-ONLY (bingkai dulu, foto bisa ditambah nanti) ---
// Taruh 5 file di public/certificates/ dengan nama cert1.jpg .. cert5.jpg
// Ganti image: "/certificates/nama-file.jpg" — nanti tinggal timpa file tanpa ubah code
export const certificates = [
  { image: "/certificates/bnsp.jpg", alt: "Sertifikat 1 — BNSP Sistem Informasi" },
  { image: "/certificates/pandi.jpg", alt: "Sertifikat 2" },
  { image: "/certificates/coursera1.jpg", alt: "Sertifikat 3" },
  { image: "/certificates/coursera2.jpg", alt: "Sertifikat 4" },
  { image: "/certificates/coursera3.jpg", alt: "Sertifikat 5" },
];

// --- KARTU MENU DI HOME — sekarang anchor 1 halaman (tidak buka halaman baru) ---
export const menuCards = [
  { href: "#data-diri", title: "Data Diri", desc: "Info pribadi lengkap", icon: "👤", accent: "bg-[var(--accent-subtle)] text-[var(--accent)]" },
  { href: "#riwayat", title: "Riwayat", desc: "Pendidikan & pengalaman", icon: "📚", accent: "bg-amber-50 text-amber-700" },
  { href: "#skills", title: "Skills", desc: "Skala kemampuan & progress", icon: "⚡", accent: "bg-[var(--accent-teal-subtle)] text-[var(--accent-teal)]" },
];
