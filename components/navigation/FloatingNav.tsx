"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, navCta } from "@/data/navigation";

export default function FloatingNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="floating-nav">
      <a
        href="#home"
        className="nav-brand"
        onClick={() => setMenuOpen(false)}
      >
        WASI FARABI<span>.</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a href={navCta.href} className="nav-contact">
          {navCta.label}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={navCta.href}
            className="nav-contact"
            onClick={() => setMenuOpen(false)}
          >
            {navCta.label}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}
