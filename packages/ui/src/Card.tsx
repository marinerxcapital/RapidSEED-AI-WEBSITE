"use client";

import { motion } from "framer-motion";
import { cn } from "@rapidseed/lib";
import type { ComponentPropsWithoutRef } from "react";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  hover?: boolean;
  glass?: boolean;
}

export function Card({ hover = true, glass = false, className, children, ...props }: CardProps) {
  const Wrapper = hover ? motion.div : "div";
  const motionProps = hover
    ? { whileHover: { y: -2, borderColor: "rgba(16,185,129,0.3)" }, transition: { duration: 0.2 } }
    : {};

  return (
    <Wrapper
      className={cn(
        "rounded-xl border border-white/10 p-6",
        glass ? "bg-white/5 backdrop-blur-md" : "bg-[#0d1424]",
        hover && "cursor-default",
        className
      )}
      {...(motionProps as Record<string, unknown>)}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </Wrapper>
  );
}
