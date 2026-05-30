"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "SK",
    name: "Sarah Kim",
    role: "CTO, TechVault",
    quote:
      "StreamFlow cut our deployment time by 60%. The AI suggestions alone saved us hundreds of engineering hours each quarter.",
  },
  {
    initials: "MR",
    name: "Marcus Rivera",
    role: "VP Engineering, ScaleOps",
    quote:
      "We evaluated every automation platform on the market. StreamFlow is the only one that actually delivers on its promises. The workflow builder is incredibly intuitive.",
    highlighted: true,
  },
  {
    initials: "AL",
    name: "Aisha Lawson",
    role: "Head of Ops, BrightPath",
    quote:
      "Our team was skeptical about another tool. Within a week, StreamFlow became the most-used app in our stack. It just works.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-36 relative">
      {/* Radial glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px] -bottom-32 left-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <SectionLabel className="mx-auto">Testimonials</SectionLabel>
          <h2 className="font-serif text-3xl md:text-[3.25rem] leading-[1.15] mt-6">
            Loved by teams <span className="gradient-text">worldwide</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.initials}
              className={`bg-card border border-border rounded-2xl p-8 relative overflow-hidden ${
                testimonial.highlighted
                  ? "md:-mt-4 md:mb-4 shadow-lg"
                  : ""
              }`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              transition={{ delay: i * 0.1 }}
            >
              {/* Accent bar (highlighted card only) */}
              {testimonial.highlighted && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-electric-blue-secondary" />
              )}

              {/* Decorative quote mark */}
              <div className="absolute top-4 right-6 text-[120px] leading-none font-serif text-primary/[0.06] pointer-events-none select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-sm leading-relaxed mt-4">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-electric-blue-secondary/20 flex items-center justify-center text-sm font-semibold text-primary">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
