"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger, viewportConfig } from "@/lib/animations";
import { SectionLabel } from "@/components/sections/SectionLabel";
import {
  Brain,
  Workflow,
  Shield,
  BarChart3,
  Sparkles,
  Lock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: FeatureItem[] = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    desc: "Leverage machine learning to uncover patterns and predict bottlenecks before they happen.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Build custom automated workflows with our visual pipeline builder. No code required.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "SOC 2 compliant with end-to-end encryption, SSO, and granular access controls.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Monitor performance with live dashboards and customizable reporting tools.",
  },
  {
    icon: Sparkles,
    title: "Smart Suggestions",
    desc: "Get contextual recommendations to optimize your processes and boost productivity.",
  },
  {
    icon: Lock,
    title: "Data Governance",
    desc: "Full audit trails, data lineage tracking, and compliance management built in.",
  },
];

const dotOpacities = [
  ["opacity-90", "opacity-70", "opacity-50", "opacity-30"],
  ["opacity-30", "opacity-50", "opacity-70", "opacity-90"],
];

export function Features() {
  return (
    <section id="features" className="py-28 md:py-36 relative">
      {/* Radial glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] -top-32 -right-32 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Text center */}
        <div className="text-center">
          <SectionLabel>Features</SectionLabel>
          <h2 className="font-serif text-3xl md:text-[3.25rem] leading-[1.15] mt-6">
            <span className="gradient-text">Everything</span> you need to
            succeed
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Powerful tools designed to streamline every step of your workflow,
            from ideation to deployment.
          </p>
        </div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {features.map((feature, index) => {
            const isFirst = index === 0;

            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className={`group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${
                  isFirst
                    ? "lg:col-span-2 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:items-center"
                    : ""
                }`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-electric-blue-secondary flex items-center justify-center mb-5">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    {feature.desc}
                  </p>
                </div>

                {/* Decorative visual for the first card on large screens */}
                {isFirst && (
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="rounded-tl-[4rem] rounded-br-[4rem] bg-gradient-to-br from-primary/10 to-electric-blue-secondary/5 border border-primary/10 h-48 w-full flex items-center justify-center">
                      <div className="grid grid-cols-4 gap-3">
                        {dotOpacities.flat().map((opacity, i) => (
                          <div
                            key={i}
                            className={`w-6 h-6 rounded-md bg-primary ${opacity} animate-float-slow`}
                            style={{ animationDelay: `${i * 150}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
