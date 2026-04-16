"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/history", label: "历史起源" },
  { href: "/culture", label: "民俗文化" },
  { href: "/temples", label: "宫庙圣地" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#8B1A1A]/95 backdrop-blur-sm border-b border-[#c9a84c]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">⛵</span>
            <span className="text-[#c9a84c] text-xl font-bold tracking-widest group-hover:text-yellow-300 transition-colors">
              妈祖文化
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#f5e6c8] hover:text-[#c9a84c] transition-colors text-sm tracking-wider font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#c9a84c] p-2"
            onClick={() => setOpen(!open)}
            aria-label="菜单"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-current transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#6B1212] border-t border-[#c9a84c]/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-3 text-[#f5e6c8] hover:text-[#c9a84c] hover:bg-[#8B1A1A] transition-colors tracking-wider"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
