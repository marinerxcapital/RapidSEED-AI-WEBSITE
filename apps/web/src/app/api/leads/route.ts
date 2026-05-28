import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const schema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  message: z.string().optional(),
  source: z.string().default("website"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const supabaseUrl = process.env["NEXT_PUBLIC_SUPABASE_URL"];
    const supabaseKey = process.env["SUPABASE_SERVICE_ROLE_KEY"];

    if (!supabaseUrl || !supabaseKey || supabaseUrl.startsWith("TODO")) {
      // Dev mode: log and return success without DB
      console.log("[leads] Supabase not configured. Lead data:", data);
      return NextResponse.json({ ok: true });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Capture UTM from referrer
    const utmSource = req.nextUrl.searchParams.get("utm_source") ?? undefined;
    const utmMedium = req.nextUrl.searchParams.get("utm_medium") ?? undefined;
    const utmCampaign = req.nextUrl.searchParams.get("utm_campaign") ?? undefined;

    const { error } = await supabase.from("leads").insert({
      ...data,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      status: "new",
    });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: err.errors },
        { status: 400 }
      );
    }
    console.error("[leads] Error:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
