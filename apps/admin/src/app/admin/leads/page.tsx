import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import type { Lead } from "@rapidseed/types";

async function getLeads(): Promise<Lead[]> {
  const url = process.env["NEXT_PUBLIC_SUPABASE_URL"];
  const key = process.env["SUPABASE_SERVICE_ROLE_KEY"];

  if (!url || !key || url.startsWith("TODO")) {
    return [];
  }

  const supabase = createClient(url, key);
  const { data } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

  return (data ?? []) as Lead[];
}

export default async function LeadsPage() {
  const leads = await getLeads();

  return (
    <div className="min-h-screen bg-navy-900 p-8">
      <div className="mb-8">
        <Link href="/admin" className="text-sm text-white/40 hover:text-white">← Dashboard</Link>
        <h1 className="mt-2 font-bold text-2xl text-white">Leads</h1>
        <p className="text-white/40 text-sm">{leads.length} total leads</p>
      </div>

      {leads.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-navy-700 p-12 text-center">
          <p className="text-white/40">No leads yet — or Supabase is not configured.</p>
        </div>
      ) : (
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy-700 text-white/40 text-xs uppercase tracking-widest">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Company</th>
                <th className="px-4 py-3 text-left">Industry</th>
                <th className="px-4 py-3 text-left">Source</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {leads.map((lead) => (
                <tr key={lead.id} className="bg-navy-800 hover:bg-navy-700 transition-colors">
                  <td className="px-4 py-3 text-white">{lead.first_name} {lead.last_name}</td>
                  <td className="px-4 py-3 text-white/60">{lead.email}</td>
                  <td className="px-4 py-3 text-white/60">{lead.company ?? "—"}</td>
                  <td className="px-4 py-3 text-white/60">{lead.industry ?? "—"}</td>
                  <td className="px-4 py-3 text-white/40">{lead.source}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs ${lead.status === "new" ? "bg-emerald-500/10 text-emerald-400" : "bg-white/5 text-white/40"}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-white/40">{new Date(lead.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
