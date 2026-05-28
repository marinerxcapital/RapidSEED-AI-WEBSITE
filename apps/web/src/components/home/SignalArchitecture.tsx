"use client";

import { motion } from "framer-motion";
import { Badge } from "@rapidseed/ui";

const signals = [
  { id: "schema", label: "JSON-LD Schema", angle: 0, color: "#10b981" },
  { id: "nap", label: "NAP Consistency", angle: 45, color: "#34d399" },
  { id: "citations", label: "AI Citations", angle: 90, color: "#10b981" },
  { id: "geo", label: "GEO Signals", angle: 135, color: "#34d399" },
  { id: "aeo", label: "AEO Content", angle: 180, color: "#10b981" },
  { id: "gps", label: "GPS Metadata", angle: 225, color: "#34d399" },
  { id: "structured", label: "Structured Data", angle: 270, color: "#10b981" },
  { id: "extraction", label: "AI Extraction Loops", angle: 315, color: "#34d399" },
];

export function SignalArchitecture() {
  return (
    <section className="bg-navy-900 py-24 lg:py-32" aria-labelledby="signals-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <Badge>Entity Signal Architecture</Badge>
            <h2
              id="signals-heading"
              className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl"
            >
              Eight Signal Layers. One Trusted Entity.
            </h2>
            <p className="mt-4 text-lg text-white/60">
              AI systems pull from dozens of data sources to decide which businesses to recommend. RapidSEED AI engineers all eight signal layers—ensuring every data source points to a consistent, verified, trusted entity.
            </p>

            <div className="mt-8 space-y-3">
              {signals.slice(0, 4).map((signal) => (
                <div key={signal.id} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-white/70">{signal.label}</span>
                </div>
              ))}
              {signals.slice(4).map((signal) => (
                <div key={signal.id} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500/50" />
                  <span className="text-sm text-white/70">{signal.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagram */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-80 w-80">
              {/* Center node */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-500/50 bg-emerald-500/10 z-10"
              >
                <div className="text-center">
                  <div className="font-display text-xs font-black text-emerald-400">YOUR</div>
                  <div className="font-display text-xs font-black text-white">ENTITY</div>
                </div>
              </motion.div>

              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-white/5" />
              <div className="absolute inset-8 rounded-full border border-white/5" />

              {/* Signal nodes */}
              {signals.map((signal, i) => {
                const rad = (signal.angle * Math.PI) / 180;
                const r = 140;
                const cx = 160 + r * Math.cos(rad);
                const cy = 160 + r * Math.sin(rad);

                return (
                  <motion.div
                    key={signal.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    style={{ left: cx - 32, top: cy - 16 }}
                    className="absolute"
                  >
                    <div className="flex items-center justify-center rounded-lg border border-emerald-500/20 bg-navy-700 px-2 py-1 text-center">
                      <span className="text-[10px] font-medium text-emerald-400 whitespace-nowrap">{signal.label}</span>
                    </div>
                    {/* Line to center */}
                    <svg
                      style={{
                        position: "absolute",
                        left: 32,
                        top: 8,
                        pointerEvents: "none",
                        width: Math.abs(160 - cx),
                        height: Math.abs(160 - cy),
                        overflow: "visible",
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
