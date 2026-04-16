"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";

const traditions = [
  {
    href: "/mazu",
    en: { name: "Mazu", subtitle: "Goddess of the Sea", desc: "The divine protector of sailors and fishermen, Mazu has been worshipped for over a thousand years across coastal China and the Chinese diaspora worldwide." },
    zh: { name: "妈祖", subtitle: "海上女神", desc: "海上渔民与航海者的神圣守护神，妈祖信仰绵延千年，遍及中国沿海及全球华人社区。" },
    color: "from-[#1a3a5c] to-[#0d5c8a]",
    accent: "#4a9eca",
    icon: "⛵",
    badge: { en: "UNESCO Heritage", zh: "联合国非遗" },
  },
  {
    href: "/confucianism",
    en: { name: "Confucianism", subtitle: "The Philosophy of Harmony", desc: "Founded by Confucius (551–479 BC), this ethical and philosophical system has guided Chinese society, governance, and family life for over two millennia." },
    zh: { name: "儒家", subtitle: "和谐之道", desc: "由孔子（前551–前479年）创立，儒家伦理哲学体系两千余年来深刻影响着中国社会、政治与家庭生活。" },
    color: "from-[#2d1a00] to-[#5c3800]",
    accent: "#c9a84c",
    icon: "📜",
    badge: { en: "UNESCO Heritage", zh: "联合国非遗" },
  },
  {
    href: "/taoism",
    soon: true,
    en: { name: "Taoism", subtitle: "The Way of Nature", desc: "An ancient philosophical and religious tradition emphasizing harmony with the Tao — the fundamental principle underlying the universe." },
    zh: { name: "道家", subtitle: "自然之道", desc: "古老的哲学与宗教传统，强调与道相和谐——道是宇宙运行的根本法则。" },
    color: "from-[#0d2d1a] to-[#1a5c38]",
    accent: "#4aca84",
    icon: "☯️",
    badge: { en: "Coming Soon", zh: "即将上线" },
  },
  {
    href: "/guan-yu",
    soon: true,
    en: { name: "Guan Yu", subtitle: "God of War & Brotherhood", desc: "A deified general of the Three Kingdoms era, Guan Yu is revered as the god of righteousness, brotherhood, and martial valor across Chinese culture." },
    zh: { name: "关羽", subtitle: "武圣与义神", desc: "三国时代的神化将领，关羽被尊奉为中国文化中忠义、兄弟情义与武勇精神的化身。" },
    color: "from-[#2d0a0a] to-[#5c1a1a]",
    accent: "#ca4a4a",
    icon: "⚔️",
    badge: { en: "Coming Soon", zh: "即将上线" },
  },
];

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0a0400 0%, #1a0a00 40%, #2d1200 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, #c9a84c 1.5px, transparent 1.5px), radial-gradient(circle at 70% 70%, #c9a84c 1.5px, transparent 1.5px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#c9a84c]/40" />
            <span className="text-[#c9a84c] text-xs tracking-[0.5em]">
              {t("SPIRITUAL HERITAGE OF CHINA", "中华精神文化遗产")}
            </span>
            <div className="h-px w-16 bg-[#c9a84c]/40" />
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4 tracking-wider"
            style={{ textShadow: "0 4px 30px rgba(201,168,76,0.3)" }}
          >
            {t("Goddesses", "中华神明")}
            <br />
            <span className="text-[#c9a84c]">{t("in China", "文化探索")}</span>
          </h1>

          <p className="text-[#f5e6c8]/70 text-base sm:text-lg leading-8 max-w-2xl mx-auto mb-10">
            {t(
              "Journey through China's rich spiritual landscape — from sea goddesses and warrior gods to philosophical sages who shaped civilization.",
              "探索中国丰富的精神世界——从海洋女神、武圣神明，到塑造文明的哲学大师。"
            )}
          </p>

          <div className="flex justify-center gap-2">
            {traditions.filter(t => !t.soon).map((trad) => (
              <Link
                key={trad.href}
                href={trad.href}
                className="px-5 py-2.5 bg-[#c9a84c] text-[#1a0a00] font-bold rounded-full hover:bg-yellow-400 transition-colors tracking-wider text-sm"
              >
                {trad.icon} {t(trad.en.name, trad.zh.name)}
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#c9a84c]/40">
          <span className="text-xs tracking-widest">{t("EXPLORE", "向下探索")}</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
        </div>
      </section>

      {/* Traditions Grid */}
      <section className="py-20 bg-[#0f0500]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]/40" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">
                {t("TRADITIONS", "文化传统")}
              </span>
              <div className="h-px w-12 bg-[#c9a84c]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
              {t("Explore the Traditions", "探索各大传统")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traditions.map((trad) => (
              <Link
                key={trad.href}
                href={trad.soon ? "#" : trad.href}
                className={`group relative rounded-2xl overflow-hidden border border-white/5 ${trad.soon ? "cursor-default" : "hover:-translate-y-1 hover:shadow-2xl"} transition-all duration-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${trad.color} opacity-90`} />
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{trad.icon}</span>
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium border"
                      style={{ borderColor: `${trad.accent}40`, color: trad.accent, background: `${trad.accent}15` }}
                    >
                      {t(trad.badge.en, trad.badge.zh)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1 tracking-wider">
                    {t(trad.en.name, trad.zh.name)}
                  </h3>
                  <p className="text-sm mb-3 font-medium" style={{ color: trad.accent }}>
                    {t(trad.en.subtitle, trad.zh.subtitle)}
                  </p>
                  <p className="text-white/60 text-sm leading-7">
                    {t(trad.en.desc, trad.zh.desc)}
                  </p>
                  {!trad.soon && (
                    <div className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: trad.accent }}>
                      {t("Explore →", "探索 →")}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-[#0a0300]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="h-px w-24 bg-[#c9a84c]/30 mx-auto mb-8" />
          <p className="text-[#f5e6c8]/60 text-sm sm:text-base leading-9 tracking-wider italic">
            {t(
              '"The man who moves a mountain begins by carrying away small stones." — Confucius',
              '"登高必自卑，行远必自迩。" — 孔子'
            )}
          </p>
          <div className="h-px w-24 bg-[#c9a84c]/30 mx-auto mt-8" />
        </div>
      </section>

      <Footer />
    </>
  );
}
