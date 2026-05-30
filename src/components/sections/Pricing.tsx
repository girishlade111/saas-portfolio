"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger, viewportConfig } from "@/lib/animations";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 workflows",
      "1,000 tasks/month",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get started free",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "For growing teams that need more power",
    features: [
      "Unlimited workflows",
      "50,000 tasks/month",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "Team collaboration",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with advanced needs",
    features: [
      "Everything in Professional",
      "Unlimited tasks",
      "Dedicated support",
      "Custom SLAs",
      "SSO & SAML",
      "Audit logs",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 md:py-36 bg-muted/50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="font-serif text-3xl md:text-[3.25rem] leading-[1.15] mt-6">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            No hidden fees. No surprises. Start free and scale as you grow.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 items-start"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {tiers.map((tier) => (
            <motion.div key={tier.name} variants={fadeInUp}>
              {tier.highlighted ? (
                /* Professional tier — gradient border wrapper */
                <div className="rounded-2xl bg-gradient-to-br from-primary via-electric-blue-secondary to-primary p-[2px] md:-mt-4 md:mb-4 shadow-xl">
                  <div className="rounded-[calc(16px-2px)] bg-card p-8 relative">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
                      Most Popular
                    </div>
                    <p className="text-sm font-semibold text-foreground mt-4">
                      {tier.name}
                    </p>
                    <p className="text-4xl font-bold text-foreground mt-4">
                      {tier.price}
                      {tier.period && (
                        <span className="text-sm font-normal text-muted-foreground">
                          {tier.period}
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {tier.description}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-5 h-5 rounded-full bg-primary/10 text-primary p-0.5">
                            <Check className="w-full h-full" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 w-full bg-gradient-to-r from-primary to-electric-blue-secondary text-white h-12 rounded-xl text-sm font-medium hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,82,255,0.35)] transition-all duration-200 active:scale-[0.98]">
                      {tier.cta}
                    </button>
                  </div>
                </div>
              ) : (
                /* Standard card — Starter & Enterprise */
                <div className="bg-card border border-border rounded-2xl p-8">
                  <p className="text-sm font-semibold text-foreground">
                    {tier.name}
                  </p>
                  <p className="text-4xl font-bold text-foreground mt-4">
                    {tier.price}
                    {tier.period && (
                      <span className="text-sm font-normal text-muted-foreground">
                        {tier.period}
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {tier.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary p-0.5">
                          <Check className="w-full h-full" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full border border-border bg-background h-12 rounded-xl text-sm font-medium hover:border-primary/30 hover:shadow-md transition-all duration-200">
                    {tier.cta}
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
