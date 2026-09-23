import { createBrowserClient } from "@supabase/ssr";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

// Guard: jangan crash build jika env belum di-set (mis. CI)
if (!url || !key) {
  console.warn("[supabase] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY belum di-set");
}

export const supabase = createBrowserClient(
  url ?? "https://placeholder.supabase.co",
  key ?? "sb_publishable_placeholder"
);