"use client";

import { motion, useInView } from "framer-motion";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { fadeInUp, stagger, scaleIn, viewportConfig } from "@/lib/animations";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] overflow-hidden relative flex items-center">
      {/* Radial glow decoration */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px] -top-48 -right-48 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel pulsing>Intelligent Automation</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-[2.75rem] md:text-5xl lg:text-[5.25rem] leading-[1.05] tracking-[-0.02em] text-foreground mt-8"
            >
              Ship faster with
              <br />
              <span className="gradient-text">AI-powered</span>
              <br />
              automation
              <span className="relative inline-block">
                <span className="gradient-underline absolute bottom-[-0.25rem] md:bottom-[-0.5rem] left-0 h-3 md:h-4 w-full rounded-sm bg-gradient-to-r from-primary/15 to-electric-blue-secondary/10" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg mt-6"
            >
              StreamFlow transforms how teams build, ship, and scale. Automate
              repetitive tasks, unlock insights, and focus on what truly matters.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <button className="bg-gradient-to-r from-primary to-electric-blue-secondary text-white font-medium px-8 h-14 rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,82,255,0.35)] transition-all duration-200 active:scale-[0.98] group">
                Start free trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-border bg-background px-8 h-14 rounded-xl flex items-center justify-center gap-2 text-foreground hover:border-primary/30 hover:shadow-md transition-all duration-200">
                <Play className="w-4 h-4" />
                Watch demo
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mt-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full border-2 border-background bg-muted" />
                <div className="w-8 h-8 rounded-full border-2 border-background bg-muted -ml-2" />
                <div className="w-8 h-8 rounded-full border-2 border-background bg-muted -ml-3" />
              </div>
              Trusted by 2,000+ teams
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Graphic */}
          <motion.div
            className="hidden lg:block"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-rotate-slow" />

              {/* Center dashboard card */}
              <div className="absolute inset-8 bg-card border border-border shadow-xl rounded-2xl p-6 flex flex-col justify-between">
                {/* Top bar with dots */}
                <div className="flex gap-1.5 mb-6">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                </div>

                {/* Chart bars */}
                <div className="flex items-end gap-3 flex-1">
                  <div className="flex-1 h-8 rounded-t-md bg-gradient-to-t from-primary/80 to-primary/40" />
                  <div className="flex-1 h-12 rounded-t-md bg-gradient-to-t from-primary/80 to-primary/40" />
                  <div className="flex-1 h-16 rounded-t-md bg-gradient-to-t from-primary to-electric-blue-secondary" />
                  <div className="flex-1 h-10 rounded-t-md bg-gradient-to-t from-primary/80 to-primary/40" />
                  <div className="flex-1 h-14 rounded-t-md bg-gradient-to-t from-primary/80 to-primary/40" />
                </div>

                {/* Trend badge */}
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full self-start">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  +24.5%
                </div>
              </div>

              {/* Floating card 1 - Task completed */}
              <div className="animate-float-slow absolute -top-2 -right-2 bg-card border border-border shadow-lg rounded-xl p-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-xs font-medium text-foreground">
                  Task completed
                </span>
              </div>

              {/* Floating card 2 - AI Processing */}
              <div className="animate-float-slower absolute -bottom-2 -left-2 bg-card border border-border shadow-lg rounded-xl p-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">AI</span>
                </div>
                <span className="text-xs font-medium text-foreground">
                  Processing...
                </span>
              </div>

              {/* Decorative dot grid */}
              <div className="absolute bottom-8 right-8 grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-primary/20"
                  />
                ))}
              </div>

              {/* Corner accent block */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-primary to-electric-blue-secondary rounded-tl-3xl shadow-[0_4px_14px_rgba(0,82,255,0.25)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
