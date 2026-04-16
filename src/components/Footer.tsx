"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[#0f0500] text-[#f5e6c8] border-t border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🏮</span>
              <span className="text-[#c9a84c] text-base font-bold tracking-widest">
                {t("Goddesses in China", "中华神明")}
              </span>
            </div>
            <p className="text-[#d4b896] text-sm leading-7">
              {t(
                "Exploring the profound spiritual traditions and cultural heritage of China, from ancient deities to philosophical schools that shaped civilization.",
                "探索中国深厚的精神传统与文化遗产，从古代神明到塑造文明的哲学流派。"
              )}
            </p>
          </div>

          <div>
            <h3 className="text-[#c9a84c] font-semibold mb-4 tracking-wider text-sm">
              {t("Explore", "探索内容")}
            </h3>
            <ul className="space-y-2 text-sm text-[#d4b896]">
              <li><Link href="/mazu" className="hover:text-[#c9a84c] transition-colors">{t("Mazu — Sea Goddess", "妈祖 — 海上女神")}</Link></li>
              <li><Link href="/confucianism" className="hover:text-[#c9a84c] transition-colors">{t("Confucianism", "儒家思想")}</Link></li>
              <li className="text-[#d4b896]/40">{t("Taoism — Coming Soon", "道家 — 即将上线")}</li>
              <li className="text-[#d4b896]/40">{t("Guan Yu — Coming Soon", "关羽 — 即将上线")}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#c9a84c] font-semibold mb-4 tracking-wider text-sm">
              {t("About", "关于")}
            </h3>
            <ul className="space-y-2 text-sm text-[#d4b896]">
              <li>{t("Bilingual: English & Chinese", "中英双语内容")}</li>
              <li>{t("Cultural & Historical Research", "文化历史研究")}</li>
              <li>{t("UNESCO Heritage Topics", "联合国非遗相关主题")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#c9a84c]/20 text-center text-[#a08060] text-xs tracking-widest">
          <p>{t("Goddesses in China · Exploring Chinese Spiritual Heritage", "中华神明 · 探索中国精神文化遗产")}</p>
        </div>
      </div>
    </footer>
  );
}
