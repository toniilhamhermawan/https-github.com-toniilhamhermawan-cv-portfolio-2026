"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Badge } from "@/components/ui/Badge";

export function SupabaseStatus() {
  const [status, setStatus] = useState("Mengecek koneksi...");
  const [ok, setOk] = useState<boolean | null>(null);

  useEffect(() => {
    async function testConnection() {
      try {
        const { error } = await supabase.auth.getSession();
        if (error) {
          setStatus("Koneksi gagal: " + error.message);
          setOk(false);
        } else {
          setStatus("Koneksi Supabase berhasil!");
          setOk(true);
        }
      } catch (e) {
        setStatus("Koneksi gagal: " + (e as Error).message);
        setOk(false);
      }
    }
    testConnection();
  }, []);

  return (
    <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm">
      <Badge variant={ok ? "success" : ok === false ? "outline" : "accent"}>
        {ok ? "● OK" : ok === false ? "● Error" : "● Checking"}
      </Badge>
      <span className="text-[var(--muted-foreground)]">{status}</span>
    </div>
  );
}
