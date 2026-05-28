import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import type { BlogPost } from "@rapidseed/types";

async function getPosts(): Promise<BlogPost[]> {
  const url = process.env["NEXT_PUBLIC_SUPABASE_URL"];
  const key = process.env["SUPABASE_SERVICE_ROLE_KEY"];
  if (!url || !key || url.startsWith("TODO")) return [];
  const supabase = createClient(url, key);
  const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
  return (data ?? []) as BlogPost[];
}

export default async function AdminBlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-navy-900 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Link href="/admin" className="text-sm text-white/40 hover:text-white">← Dashboard</Link>
          <h1 className="mt-2 font-bold text-2xl text-white">Blog Posts</h1>
        </div>
        <Link href="/admin/blog/new" className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors">
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-navy-700 p-12 text-center">
          <p className="text-white/40 mb-4">No blog posts yet.</p>
          <Link href="/admin/blog/new" className="text-emerald-400 text-sm hover:text-emerald-300">Create your first post →</Link>
        </div>
      ) : (
        <div className="space-y-2">
          {posts.map((post) => (
            <div key={post.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-navy-700 px-6 py-4">
              <div>
                <p className="font-semibold text-white">{post.title}</p>
                <p className="text-sm text-white/40">/blog/{post.slug} · {post.author}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`rounded-full px-2 py-0.5 text-xs ${post.published ? "bg-emerald-500/10 text-emerald-400" : "bg-white/5 text-white/40"}`}>
                  {post.published ? "Published" : "Draft"}
                </span>
                <Link href={`/admin/blog/${post.id}`} className="text-sm text-white/40 hover:text-white transition-colors">
                  Edit →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
