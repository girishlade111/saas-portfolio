"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger, viewportConfig } from "@/lib/animations";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { TrendingUp, Users, Zap, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: TrendingUp, value: "98.7%", label: "Uptime guarantee" },
  { icon: Users, value: "2,400+", label: "Active teams" },
  { icon: Zap, value: "10x", label: "Faster workflows" },
  { icon: Globe, value: "50M+", label: "Tasks automated" },
];

export function Stats() {
  return (
    <section className="bg-foreground text-background py-28 md:py-36 relative overflow-hidden">
      {/* Dot pattern texture overlay */}
      <div className="absolute inset-0 dot-pattern" />

      {/* Radial glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/6 blur-[150px] -bottom-32 -left-32 pointer-events-none" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionLabel
          className="border-white/20 bg-white/5"
          dotClassName="bg-white"
          textClassName="text-white/80"
        >
          By the numbers
        </SectionLabel>

        <h2 className="font-serif text-3xl md:text-[3.25rem] leading-[1.15] mt-6">
          Trusted by teams who{" "}
          <span className="gradient-text">demand more</span>
        </h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className={`${
                index === 0 || index === 1
                  ? "md:border-r md:border-white/10 md:pr-8"
                  : ""
              }`}
            >
              <div className="rounded-lg bg-white/10 p-2.5 inline-flex">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
