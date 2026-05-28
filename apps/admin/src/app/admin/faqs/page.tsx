import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import type { FAQ } from "@rapidseed/types";

async function getFaqs(): Promise<FAQ[]> {
  const url = process.env["NEXT_PUBLIC_SUPABASE_URL"];
  const key = process.env["SUPABASE_SERVICE_ROLE_KEY"];
  if (!url || !key || url.startsWith("TODO")) return [];
  const supabase = createClient(url, key);
  const { data } = await supabase.from("faqs").select("*").order("sort_order", { ascending: true });
  return (data ?? []) as FAQ[];
}

export default async function AdminFAQsPage() {
  const faqs = await getFaqs();

  return (
    <div className="min-h-screen bg-navy-900 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Link href="/admin" className="text-sm text-white/40 hover:text-white">← Dashboard</Link>
          <h1 className="mt-2 font-bold text-2xl text-white">FAQs</h1>
        </div>
        <Link href="/admin/faqs/new" className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors">
          + New FAQ
        </Link>
      </div>

      {faqs.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-navy-700 p-12 text-center">
          <p className="text-white/40">No FAQs yet. FAQs drive AI extraction — add them now.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {faqs.map((faq) => (
            <div key={faq.id} className="rounded-xl border border-white/10 bg-navy-700 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-white">{faq.question}</p>
                  <p className="mt-1 text-sm text-white/40 line-clamp-2">{faq.answer}</p>
                  {faq.category && <span className="mt-2 inline-block rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/40">{faq.category}</span>}
                </div>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${faq.published ? "bg-emerald-500/10 text-emerald-400" : "bg-white/5 text-white/40"}`}>
                  {faq.published ? "Published" : "Draft"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
