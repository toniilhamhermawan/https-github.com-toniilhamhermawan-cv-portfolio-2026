import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { Preloader } from "@/components/layout/Preloader";
import { IgnoreExtensionErrors } from "@/components/layout/IgnoreExtensionErrors";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toni Ilham Hermawan, S.Kom. — Information Systems Graduate",
  description:
    "Portfolio developer modern futuristik — dark, blue/red glow, minimalis. Toni Ilham Hermawan, S.Kom., Information Systems Graduate.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* EARLY filter: harus sebelum extension (executors/200.js) dieksekusi.
            useEffect saja terlambat — extension inject di document_start */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function isExt(m){return m&& (m.indexOf('M_ID')!==-1||m.indexOf('chrome-extension://')!==-1||m.indexOf('eppiocemhmnlbhjplcgkofciiegomcon')!==-1||m.indexOf('executors/200.js')!==-1)}var origOnError=window.onerror;window.addEventListener('error',function(e){var m=''+e.message+(e.filename||'')+((e.error&&e.error.stack)||'');if(isExt(m)){e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();return true}},true);window.addEventListener('unhandledrejection',function(e){var r=e.reason;var m=typeof r==='string'?r:(r&&r.message)||(r&&r.stack)||String(r||'');if(isExt(m)||isExt(String(r))){e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation()}},true);window.onerror=function(msg,src){if(isExt(String(msg)+String(src))){return true}if(origOnError)return origOnError.apply(this,arguments)}})();(function(){function strip(root){try{root.querySelectorAll('[bis_skin_checked]').forEach(function(el){el.removeAttribute('bis_skin_checked')})}catch(e){}}function onMut(muts){muts.forEach(function(m){if(m.type==='attributes'&&m.attributeName==='bis_skin_checked'){try{m.target.removeAttribute('bis_skin_checked')}catch(e){}}if(m.addedNodes){m.addedNodes.forEach(function(n){if(n.nodeType===1){if(n.hasAttribute&&n.hasAttribute('bis_skin_checked'))try{n.removeAttribute('bis_skin_checked')}catch(e){}if(n.querySelectorAll)strip(n)}})}})}strip(document.documentElement);var mo=new MutationObserver(onMut);mo.observe(document.documentElement,{attributes:true,childList:true,subtree:true,attributeFilter:['bis_skin_checked']});document.addEventListener('DOMContentLoaded',function(){strip(document.documentElement)});})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <IgnoreExtensionErrors />
        <Preloader />
        <Header />
        <main className="flex-1 pb-16 md:pb-0 animate-fade-in">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
