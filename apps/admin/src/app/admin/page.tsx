import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

async function getDashboardStats() {
  const url = process.env["NEXT_PUBLIC_SUPABASE_URL"];
  const key = process.env["SUPABASE_SERVICE_ROLE_KEY"];

  if (!url || !key || url.startsWith("TODO")) {
    return { leads: 0, posts: 0, faqs: 0, studies: 0 };
  }

  const supabase = createClient(url, key);

  const [leadsRes, postsRes, faqsRes, studiesRes] = await Promise.all([
    supabase.from("leads").select("id", { count: "exact", head: true }),
    supabase.from("blog_posts").select("id", { count: "exact", head: true }),
    supabase.from("faqs").select("id", { count: "exact", head: true }),
    supabase.from("case_studies").select("id", { count: "exact", head: true }),
  ]);

  return {
    leads: leadsRes.count ?? 0,
    posts: postsRes.count ?? 0,
    faqs: faqsRes.count ?? 0,
    studies: studiesRes.count ?? 0,
  };
}

const navItems = [
  { href: "/admin/leads", label: "Leads", icon: "👥" },
  { href: "/admin/blog", label: "Blog Posts", icon: "📝" },
  { href: "/admin/faqs", label: "FAQs", icon: "❓" },
  { href: "/admin/case-studies", label: "Case Studies", icon: "📊" },
];

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  const cards = [
    { label: "Total Leads", value: stats.leads, href: "/admin/leads" },
    { label: "Blog Posts", value: stats.posts, href: "/admin/blog" },
    { label: "FAQs", value: stats.faqs, href: "/admin/faqs" },
    { label: "Case Studies", value: stats.studies, href: "/admin/case-studies" },
  ];

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-white/10 bg-navy-800">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
              <span className="font-bold text-sm text-black">R</span>
            </div>
            <span className="font-bold text-white">Admin</span>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/60 hover:bg-white/5 hover:text-white transition-colors"
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="font-bold text-2xl text-white">Dashboard</h1>
          <p className="text-white/40 text-sm mt-1">RapidSEED AI Content Management</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {cards.map((card) => (
            <Link key={card.label} href={card.href}>
              <div className="rounded-xl border border-white/10 bg-navy-700 p-6 hover:border-emerald-500/30 transition-colors">
                <p className="text-3xl font-bold text-white">{card.value}</p>
                <p className="text-sm text-white/40 mt-1">{card.label}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-navy-700 p-6">
            <h2 className="font-semibold text-white mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Link href="/admin/blog/new" className="block rounded-lg bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400 hover:bg-emerald-500/20 transition-colors">
                + New Blog Post
              </Link>
              <Link href="/admin/faqs/new" className="block rounded-lg bg-white/5 px-4 py-2 text-sm text-white/60 hover:bg-white/10 transition-colors">
                + New FAQ
              </Link>
              <Link href="/admin/case-studies/new" className="block rounded-lg bg-white/5 px-4 py-2 text-sm text-white/60 hover:bg-white/10 transition-colors">
                + New Case Study
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-navy-700 p-6">
            <h2 className="font-semibold text-white mb-4">System Status</h2>
            <div className="space-y-2">
              {[
                { label: "Website", status: "Live" },
                { label: "Supabase DB", status: process.env["NEXT_PUBLIC_SUPABASE_URL"]?.startsWith("TODO") ? "Not configured" : "Connected" },
                { label: "Admin Auth", status: "Active" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <span className="text-white/60">{item.label}</span>
                  <span className={item.status === "Live" || item.status === "Connected" || item.status === "Active" ? "text-emerald-400" : "text-yellow-400"}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
