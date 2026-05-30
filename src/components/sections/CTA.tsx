"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-foreground text-background py-28 md:py-36 relative overflow-hidden">
      {/* Dot pattern texture */}
      <div className="absolute inset-0 dot-pattern" />

      {/* Radial glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="font-serif text-3xl md:text-[3.25rem] leading-[1.15]">
              Ready to <span className="gradient-text">transform</span> your
              workflow?
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mt-4">
              Join 2,000+ teams already using StreamFlow to ship faster and work
              smarter. Start your free trial today.
            </p>

            {/* Email signup form */}
            <form
              className="flex flex-col sm:flex-row gap-3 mt-10 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 rounded-xl bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/40 text-sm flex-1 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-electric-blue-secondary text-white font-medium px-8 h-14 rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,82,255,0.35)] transition-all duration-200 active:scale-[0.98] shrink-0"
              >
                Get started
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-white/40 text-xs mt-4">
              No credit card required. 14-day free trial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
