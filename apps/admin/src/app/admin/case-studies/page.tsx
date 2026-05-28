import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import type { CaseStudy } from "@rapidseed/types";

async function getCaseStudies(): Promise<CaseStudy[]> {
  const url = process.env["NEXT_PUBLIC_SUPABASE_URL"];
  const key = process.env["SUPABASE_SERVICE_ROLE_KEY"];
  if (!url || !key || url.startsWith("TODO")) return [];
  const supabase = createClient(url, key);
  const { data } = await supabase.from("case_studies").select("*").order("created_at", { ascending: false });
  return (data ?? []) as CaseStudy[];
}

export default async function AdminCaseStudiesPage() {
  const studies = await getCaseStudies();

  return (
    <div className="min-h-screen bg-navy-900 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Link href="/admin" className="text-sm text-white/40 hover:text-white">← Dashboard</Link>
          <h1 className="mt-2 font-bold text-2xl text-white">Case Studies</h1>
        </div>
        <Link href="/admin/case-studies/new" className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors">
          + New Case Study
        </Link>
      </div>

      {studies.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-navy-700 p-12 text-center">
          <p className="text-white/40">No case studies yet.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {studies.map((study) => (
            <div key={study.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-navy-700 px-6 py-4">
              <div>
                <p className="font-semibold text-white">{study.title}</p>
                <p className="text-sm text-white/40">{study.industry} · {study.client_type}</p>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-xs ${study.published ? "bg-emerald-500/10 text-emerald-400" : "bg-white/5 text-white/40"}`}>
                {study.published ? "Published" : "Draft"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
