import { cn } from "@rapidseed/lib";
import type { ComponentPropsWithoutRef } from "react";

type BadgeVariant = "emerald" | "blue" | "white" | "red";

interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  white: "bg-white/5 text-white/70 border border-white/10",
  red: "bg-red-500/10 text-red-400 border border-red-500/20",
};

export function Badge({ variant = "emerald", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
