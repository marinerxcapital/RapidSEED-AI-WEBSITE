import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RapidSEED AI — Admin",
  description: "RapidSEED AI admin dashboard",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
