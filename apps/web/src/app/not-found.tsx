import Link from "next/link";
import { Button } from "@rapidseed/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy-900 px-4 text-center">
      <p className="font-display text-8xl font-black text-white/10">404</p>
      <h1 className="mt-4 font-display text-3xl font-black text-white">Page Not Found</h1>
      <p className="mt-3 text-white/60">The page you're looking for doesn't exist or has been moved.</p>
      <div className="mt-8 flex gap-4">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/contact">
          <Button variant="secondary">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
}
