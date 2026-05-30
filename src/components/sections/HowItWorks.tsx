"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger, viewportConfig } from "@/lib/animations";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect your tools",
    desc: "Integrate with 200+ apps and services in minutes. Zero configuration needed.",
    visual: (
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-[#4A154B] flex items-center justify-center text-[10px] font-bold text-white">
            S
          </div>
          <span className="text-[10px] text-muted-foreground">Slack</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-[#24292e] flex items-center justify-center text-[10px] font-bold text-white">
            G
          </div>
          <span className="text-[10px] text-muted-foreground">GitHub</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-[#0052CC] flex items-center justify-center text-[10px] font-bold text-white">
            J
          </div>
          <span className="text-[10px] text-muted-foreground">Jira</span>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Build your flows",
    desc: "Use our visual editor to create powerful automation pipelines. Drag, drop, deploy.",
    visual: (
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-primary" />
        <div className="w-6 h-0.5 bg-primary/40" />
        <div className="w-3 h-3 rounded-full bg-electric-blue-secondary" />
        <div className="w-6 h-0.5 bg-primary/40" />
        <div className="w-3 h-3 rounded-full bg-primary" />
      </div>
    ),
  },
  {
    number: "03",
    title: "Scale with confidence",
    desc: "Watch your productivity soar as StreamFlow handles the repetitive work for you.",
    visual: (
      <div className="flex items-end gap-1.5 h-10">
        <div className="w-3 h-3 rounded-sm bg-primary/30" />
        <div className="w-3 h-5 rounded-sm bg-primary/50" />
        <div className="w-3 h-7 rounded-sm bg-primary/70" />
        <div className="w-3 h-10 rounded-sm bg-primary" />
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 md:py-36 bg-muted/50 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <SectionLabel pulsing={true} className="mx-auto">
            How it works
          </SectionLabel>
          <h2 className="font-serif text-3xl md:text-[3.25rem] leading-[1.15] mt-6">
            Three steps to{" "}
            <span className="gradient-text">transform</span> your workflow
          </h2>
        </div>

        {/* Steps */}
        <motion.div
          className="mt-20 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-1 flex-col md:flex-row items-center w-full">
              <motion.div className="flex-1 w-full" variants={fadeInUp}>
                <div className="text-4xl font-bold gradient-text font-mono">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mt-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  {step.desc}
                </p>
                <div className="bg-card border border-border rounded-xl p-4 mt-4 shadow-sm">
                  {step.visual}
                </div>
              </motion.div>

              {/* Arrow connector between steps (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0 mx-4">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
