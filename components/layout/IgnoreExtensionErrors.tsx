"use client";

import { useEffect } from "react";

// Filter unhandled errors + atribut bis_skin_checked yang di-inject extension
// supaya overlay Next.js [browser] tidak spam error M_ID / hydration mismatch
// Root cause: chrome-extension://eppiocemhmnlbhjplcgkofciiegomcon/executors/200.js
// dan extension lain (Urban VPN / Hover / SpeakIt) yang inject bis_skin_checked="1"
export function IgnoreExtensionErrors() {
  useEffect(() => {
    // --- 1) bersihkan bis_skin_checked agar tidak hydration mismatch ---
    const strip = (root: ParentNode) => {
      root.querySelectorAll("[bis_skin_checked]").forEach((el) => el.removeAttribute("bis_skin_checked"));
    };
    strip(document.documentElement);
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        if (m.type === "attributes" && m.attributeName === "bis_skin_checked") {
          (m.target as Element).removeAttribute("bis_skin_checked");
        }
        m.addedNodes.forEach((n) => {
          if (n.nodeType === 1) {
            const el = n as Element;
            if (el.hasAttribute("bis_skin_checked")) el.removeAttribute("bis_skin_checked");
            el.querySelectorAll?.("[bis_skin_checked]").forEach((c) => c.removeAttribute("bis_skin_checked"));
          }
        });
      }
    });
    mo.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["bis_skin_checked"],
    });

    const isExtensionError = (msg: string) =>
      msg.includes("chrome-extension://") ||
      msg.includes("M_ID") ||
      msg.includes("eppiocemhmnlbhjplcgkofciiegomcon") ||
      msg.includes("executors/200.js") ||
      msg.includes("bis_skin_checked");

    const onError = (e: ErrorEvent) => {
      const msg = `${e.message} ${e.filename} ${e.error?.stack ?? ""}`;
      if (isExtensionError(msg)) {
        e.preventDefault();
        e.stopPropagation();
        if ((e as unknown as { stopImmediatePropagation?: () => void }).stopImmediatePropagation) {
          (e as unknown as { stopImmediatePropagation: () => void }).stopImmediatePropagation();
        }
        return false;
      }
    };

    const onRejection = (e: PromiseRejectionEvent) => {
      const reason: unknown = e.reason;
      const msg =
        typeof reason === "string"
          ? reason
          : (reason as Error)?.message ?? (reason as Error)?.stack ?? String(reason ?? "");
      // Some extensions reject dengan object tanpa message tapi stack mengandung M_ID
      if (isExtensionError(msg) || isExtensionError(String(reason))) {
        e.preventDefault();
        e.stopPropagation();
        if ((e as unknown as { stopImmediatePropagation?: () => void }).stopImmediatePropagation) {
          (e as unknown as { stopImmediatePropagation: () => void }).stopImmediatePropagation();
        }
      }
    };

    // capture:true supaya cegat sebelum Next dev overlay
    window.addEventListener("error", onError, true);
    window.addEventListener("unhandledrejection", onRejection, true);

    return () => {
      mo.disconnect();
      window.removeEventListener("error", onError, true);
      window.removeEventListener("unhandledrejection", onRejection, true);
    };
  }, []);

  return null;
}
