"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";

export default function ConfucianismPage() {
  const { t } = useLang();

  const highlights = [
    { icon: "📜", en: { title: "The Analects", desc: "The core text of Confucianism, compiled by his disciples after Confucius' death, recording his teachings on morality, governance, and self-cultivation." }, zh: { title: "《论语》", desc: "儒家核心经典，孔子逝世后由弟子整理编撰，记录了孔子关于道德、治国与修身的思想精华。" } },
    { icon: "👨‍👩‍👧", en: { title: "Five Relationships", desc: "Ruler-Subject, Parent-Child, Husband-Wife, Elder-Younger, and Friend-Friend — the five bonds that Confucius believed formed the foundation of a harmonious society." }, zh: { title: "五伦", desc: "君臣、父子、夫妇、兄弟、朋友——孔子认为这五种人伦关系是和谐社会的根基。" } },
    { icon: "🌏", en: { title: "Global Influence", desc: "Confucianism shaped not only China, but also Korea, Japan, Vietnam, and beyond. Today, over 500 Confucius Institutes operate in universities worldwide." }, zh: { title: "世界影响", desc: "儒家思想不仅塑造了中国，也深刻影响了朝鲜、日本、越南等国。如今，全球逾500所孔子学院遍布各大高校。" } },
    { icon: "🏛️", en: { title: "UNESCO Heritage", desc: "The Temple, Cemetery, and Kong Family Mansion in Qufu are UNESCO World Heritage Sites, preserving 2,500 years of Confucian tradition." }, zh: { title: "世界遗产", desc: "曲阜三孔（孔庙、孔林、孔府）已被列入联合国教科文组织世界遗产名录，传承着2500年的儒家文明。" } },
  ];

  const sections = [
    { href: "/confucianism/history", icon: "🕰️", en: { title: "History & Life of Confucius", excerpt: "Born in the state of Lu in 551 BC, Confucius became one of history's most influential thinkers, traveling across states to spread his vision of just governance and moral society..." }, zh: { title: "历史与孔子生平", excerpt: "孔子生于公元前551年鲁国，成为历史上最具影响力的思想家之一，周游列国，传播仁政与道德社会的理想……" } },
    { href: "/confucianism/philosophy", icon: "☯️", en: { title: "Philosophy & Core Teachings", excerpt: "Ren (Benevolence), Yi (Righteousness), Li (Ritual Propriety), Zhi (Wisdom), Xin (Integrity) — the five virtues that define Confucian ethics and guide human conduct..." }, zh: { title: "哲学与核心思想", excerpt: "仁、义、礼、智、信——儒家五常是定义儒家伦理、指导人类行为的核心美德……" } },
    { href: "/confucianism/places", icon: "🏯", en: { title: "Sacred Sites & Academies", excerpt: "The Three Confucian Sites in Qufu, the White Deer Grotto Academy, and Yuelu Academy — places where Confucian thought was preserved and transmitted across the centuries..." }, zh: { title: "圣地与书院", excerpt: "曲阜三孔、白鹿洞书院、岳麓书院——儒家思想在这些地方得以传承，绵延千年……" } },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a0e00 0%, #3d2200 40%, #6b3d00 70%, #3d2200 100%)" }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, #c9a84c 1.5px, transparent 1.5px), radial-gradient(circle at 75% 75%, #c9a84c 1.5px, transparent 1.5px)", backgroundSize: "50px 50px" }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#c9a84c]/60" />
            <span className="text-[#c9a84c] text-xs tracking-[0.5em]">{t("CHINESE PHILOSOPHY", "中华哲学")}</span>
            <div className="h-px w-16 bg-[#c9a84c]/60" />
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-2 tracking-widest" style={{ textShadow: "0 4px 30px rgba(201,168,76,0.4)" }}>
            {t("Confucianism", "儒家")}
          </h1>
          <p className="text-[#c9a84c] text-xl tracking-[0.25em] mb-6 font-light">
            {t("The Philosophy of Harmony · 551 BC – Present", "和谐之道 · 公元前551年至今")}
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-8 max-w-2xl mx-auto mb-10">
            {t(
              "Founded by Confucius over 2,500 years ago, Confucianism is one of the world's most enduring philosophical traditions. Its teachings on benevolence, righteousness, and social harmony continue to shape the lives of over a billion people across East Asia.",
              "由孔子创立于2500余年前，儒家是世界上延续最久的哲学传统之一。其关于仁、义与社会和谐的思想，至今仍深刻影响着东亚超过十亿人的生活。"
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/confucianism/history" className="px-8 py-3 bg-[#c9a84c] text-[#1a0e00] font-bold rounded-full hover:bg-yellow-400 transition-colors tracking-wider text-sm">
              {t("Life of Confucius", "孔子生平")}
            </Link>
            <Link href="/confucianism/philosophy" className="px-8 py-3 border border-[#c9a84c]/60 text-[#c9a84c] font-bold rounded-full hover:bg-[#c9a84c]/10 transition-colors tracking-wider text-sm">
              {t("Core Philosophy", "核心思想")}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#1a0e00]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "551 BC", en: "Birth of Confucius", zh: "孔子诞生" },
              { num: "2,500+", en: "Years of Influence", zh: "年传承" },
              { num: "500+", en: "Confucius Institutes", zh: "所孔子学院" },
              { num: "1B+", en: "People Influenced", zh: "人受影响" },
            ].map((s) => (
              <div key={s.num}>
                <div className="text-2xl sm:text-3xl font-black text-[#c9a84c]">{s.num}</div>
                <div className="text-white/50 text-xs tracking-wider mt-1">{t(s.en, s.zh)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-[#fdf8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">{t("KEY CONCEPTS", "核心概念")}</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl font-bold text-[#3d2200] tracking-wider">{t("Pillars of Confucianism", "儒家思想基石")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8d5b5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-[#6b3d00] font-bold text-lg mb-3 tracking-wider">{t(item.en.title, item.zh.title)}</h3>
                <p className="text-[#5a3a2a] text-sm leading-7">{t(item.en.desc, item.zh.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 bg-[#fff9f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#3d2200] tracking-wider">{t("Explore Confucianism", "深入了解儒家")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white rounded-2xl overflow-hidden border border-[#e8d5b5] hover:shadow-lg transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-[#6b3d00] to-[#c9a84c]" />
                <div className="p-6">
                  <span className="text-3xl block mb-3">{s.icon}</span>
                  <h3 className="text-[#3d2200] font-bold text-xl mb-3 tracking-wider group-hover:text-[#6b3d00] transition-colors">{t(s.en.title, s.zh.title)}</h3>
                  <p className="text-[#7a5a3a] text-sm leading-7 mb-4">{t(s.en.excerpt, s.zh.excerpt)}</p>
                  <span className="text-[#c9a84c] text-sm font-medium tracking-wider group-hover:underline">{t("Read more →", "阅读更多 →")}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #3d2200 0%, #6b3d00 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-5xl text-[#c9a84c]/30 font-serif leading-none">&ldquo;</span>
          <p className="text-[#f5e6c8] text-xl sm:text-2xl leading-10 tracking-wider font-light -mt-4">
            {t(
              "It does not matter how slowly you go as long as you do not stop.",
              "不患人之不己知，患不知人也。"
            )}
          </p>
          <p className="text-[#c9a84c] text-sm mt-3 tracking-widest">— {t("Confucius", "孔子")}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
