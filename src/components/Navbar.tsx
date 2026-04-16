"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

const navLinks = [
  { href: "/", en: "Home", zh: "首页" },
  { href: "/mazu", en: "Mazu", zh: "妈祖" },
  { href: "/confucianism", en: "Confucianism", zh: "儒家" },
  { href: "/taoism", en: "Taoism", zh: "道家", soon: true },
  { href: "/guan-yu", en: "Guan Yu", zh: "关羽", soon: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a0a00]/95 backdrop-blur-sm border-b border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl">🏮</span>
            <span className="text-[#c9a84c] text-base font-bold tracking-widest group-hover:text-yellow-300 transition-colors">
              {t("Goddesses in China", "中华神明")}
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                <Link
                  href={link.soon ? "#" : link.href}
                  className={`text-sm tracking-wider font-medium transition-colors ${
                    link.soon
                      ? "text-[#f5e6c8]/30 cursor-not-allowed"
                      : "text-[#f5e6c8] hover:text-[#c9a84c]"
                  }`}
                >
                  {t(link.en, link.zh)}
                  {link.soon && (
                    <span className="ml-1 text-[10px] text-[#c9a84c]/50">{t("soon", "即将")}</span>
                  )}
                </Link>
              </div>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-bold tracking-wider hover:bg-[#c9a84c]/10 transition-colors"
            >
              <span>{lang === "en" ? "🇨🇳" : "🇺🇸"}</span>
              <span>{lang === "en" ? "中文" : "EN"}</span>
            </button>
          </div>

          {/* Mobile right side */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="px-2 py-1 rounded border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-bold"
            >
              {lang === "en" ? "中文" : "EN"}
            </button>
            <button
              className="text-[#c9a84c] p-1"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <div className="w-5 h-0.5 bg-current mb-1.5" />
              <div className="w-5 h-0.5 bg-current mb-1.5" />
              <div className="w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f0500] border-t border-[#c9a84c]/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.soon ? "#" : link.href}
              className={`block px-6 py-3 tracking-wider text-sm ${
                link.soon
                  ? "text-[#f5e6c8]/30"
                  : "text-[#f5e6c8] hover:text-[#c9a84c] hover:bg-[#1a0a00]"
              } transition-colors`}
              onClick={() => !link.soon && setOpen(false)}
            >
              {t(link.en, link.zh)}
              {link.soon && <span className="ml-2 text-[10px] text-[#c9a84c]/50">{t("coming soon", "即将上线")}</span>}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
