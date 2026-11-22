
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Art", href: "#art" },
];

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

      <nav className="desktop-nav">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="nav-contact">
          Let's Talk <span>↗</span>
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
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Let's Talk ↗
          </a>
        </nav>
      )}
    </header>
  );
}
