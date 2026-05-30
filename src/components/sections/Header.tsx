"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="gradient-bg rounded-lg h-7 w-7" />
          <span className="text-lg font-semibold text-foreground">
            StreamFlow
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-sm">
            Log in
          </Button>
          <button className="bg-gradient-to-r from-primary to-electric-blue-secondary text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,82,255,0.25)] transition-all duration-200">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg hover:bg-accent transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-foreground" />
        </button>
      </div>

      {/* Mobile Sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[360px]">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2.5">
              <div className="gradient-bg rounded-lg h-7 w-7" />
              <span className="text-lg font-semibold text-foreground">
                StreamFlow
              </span>
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-1 px-4 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setMobileOpen(false);
                }}
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-3 px-3 rounded-lg hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 px-4 mt-6">
            <Button variant="ghost" className="text-sm w-full justify-center">
              Log in
            </Button>
            <button className="bg-gradient-to-r from-primary to-electric-blue-secondary text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,82,255,0.25)] transition-all duration-200 w-full">
              Get Started
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
