"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";
import type { Language } from "@/context/LanguageContext";

export default function ConfucianismPlacesPage() {
  const { lang, t } = useLang();
  const tArr = (en: string[], zh: string[]) => (lang as Language) === "zh" ? zh : en;

  const sites = [
    {
      name: { en: "Temple of Confucius", zh: "孔庙" },
      location: { en: "Qufu, Shandong Province", zh: "山东省曲阜市" },
      founded: { en: "478 BC — one year after Confucius' death", zh: "公元前478年——孔子逝世后一年" },
      badge: { en: "UNESCO Heritage", zh: "世界遗产" },
      badgeColor: "bg-amber-700",
      desc: { en: "Built just one year after Confucius' death in 478 BC, the Temple of Confucius in Qufu is the largest and best-preserved Confucian temple in the world. Spanning 22 hectares with over 100 buildings, it has been continuously maintained and expanded over 2,500 years. The magnificent Dacheng Hall at its center is dedicated to Confucius and his 72 disciples.", zh: "孔庙建于公元前478年孔子逝世后一年，是全世界规模最大、保存最完好的孔庙。庙宇占地22公顷，有建筑百余座，历经2500年持续修缮与扩建。宏伟的大成殿居于中心，供奉孔子与其七十二弟子。" },
      highlights: { en: ["Dacheng Hall", "Apricot Altar (Xingtan)", "Shengji Hall", "1,000+ Ancient Steles"], zh: ["大成殿", "杏坛", "圣迹殿", "千余块古碑"] },
    },
    {
      name: { en: "Cemetery of Confucius", zh: "孔林" },
      location: { en: "North of Qufu, Shandong Province", zh: "山东省曲阜市北" },
      founded: { en: "479 BC — original burial site", zh: "公元前479年——原始墓地" },
      badge: { en: "UNESCO Heritage", zh: "世界遗产" },
      badgeColor: "bg-emerald-700",
      desc: { en: "The Cemetery of Confucius (Kong Lin) is the oldest and largest family cemetery in the world, with continuous burials spanning 2,500 years. It contains the graves of Confucius himself, his son, and over 100,000 of his descendants across 200 hectares of ancient woodland. Walking through its ancient cypress trees is a profoundly contemplative experience.", zh: "孔林是世界上历史最悠久、规模最大的家族墓地，历经2500年绵延至今。占地200公顷的古树林中，长眠着孔子、其子及逾十万后裔。漫步其间古柏参天，令人心生深远的沉思之感。" },
      highlights: { en: ["Tomb of Confucius", "Tomb of Zisi (grandson)", "Ancient Cypress Grove", "Zigong's Cottage"], zh: ["孔子墓", "子思墓", "古柏林", "子贡庐墓处"] },
    },
    {
      name: { en: "Kong Family Mansion", zh: "孔府" },
      location: { en: "Adjacent to the Temple, Qufu", zh: "曲阜孔庙旁" },
      founded: { en: "Song Dynasty (10th century AD)", zh: "宋代（公元10世纪）" },
      badge: { en: "UNESCO Heritage", zh: "世界遗产" },
      badgeColor: "bg-blue-700",
      desc: { en: "The Kong Family Mansion served as the official residence of Confucius' lineal descendants for over 700 years. With 463 rooms spread across nine courtyards, it is China's largest historical residential complex after the Imperial Palace. The descendants of Confucius were granted the hereditary title of Duke Yansheng by imperial decree.", zh: "孔府是孔子嫡系后裔的官邸，历时逾700年。九进院落、463间房屋，是中国除皇宫外规模最大的历史居住建筑群。孔子后裔世袭奉圣公爵位，由皇帝御旨颁授。" },
      highlights: { en: ["Reception Hall (Zhongtang)", "Inner Residential Quarters", "Kong Family Archives", "Ancient Gardens"], zh: ["中堂", "内宅", "孔府档案", "古花园"] },
    },
    {
      name: { en: "White Deer Grotto Academy", zh: "白鹿洞书院" },
      location: { en: "Lushan, Jiangxi Province", zh: "江西省庐山" },
      founded: { en: "940 AD, restored 1179 AD by Zhu Xi", zh: "940年，1179年由朱熹重修" },
      badge: { en: "Top Academy", zh: "四大书院" },
      badgeColor: "bg-purple-700",
      desc: { en: "Founded in the Five Dynasties period, the White Deer Grotto Academy was revived in 1179 by the great Neo-Confucian philosopher Zhu Xi, who transformed it into the most influential academic institution of the Song Dynasty. Its charter, written by Zhu Xi, defined the curriculum and purpose of Confucian education for centuries.", zh: "白鹿洞书院创建于五代时期，1179年由伟大的新儒家哲学家朱熹复兴，将其打造为宋代最具影响力的学术机构。朱熹亲撰的《白鹿洞书院揭示》，数百年来一直是儒家教育课程与宗旨的蓝本。" },
      highlights: { en: ["Zhu Xi's Memorial Hall", "Confucius Temple", "Ancient Library", "Mountain Setting"], zh: ["朱熹纪念堂", "先圣庙", "古藏书楼", "庐山风光"] },
    },
    {
      name: { en: "Yuelu Academy", zh: "岳麓书院" },
      location: { en: "Changsha, Hunan Province", zh: "湖南省长沙市" },
      founded: { en: "976 AD — Song Dynasty", zh: "976年——宋代" },
      badge: { en: "Top Academy", zh: "四大书院" },
      badgeColor: "bg-purple-700",
      desc: { en: "Founded in 976 AD, Yuelu Academy is one of China's oldest continuously operating educational institutions, now part of Hunan University. For over 1,000 years, it has cultivated generations of Confucian scholars and produced many of China's most influential political and intellectual figures, including Zeng Guofan and Mao Zedong." , zh: "岳麓书院创建于976年，是中国历史最悠久的持续运营教育机构之一，现为湖南大学的一部分。千余年来，书院培育了一代又一代儒学英才，孕育了曾国藩、毛泽东等众多影响深远的政治家与思想家。" },
      highlights: { en: ["Lecture Hall (Jiangdao Tang)", "Confucius Temple", "Zhuxi Ancestral Hall", "Cultural Relics Museum"], zh: ["讲道堂", "文庙", "朱熹祠", "文物陈列室"] },
    },
    {
      name: { en: "Confucius Temple", zh: "夫子庙" },
      location: { en: "Nanjing, Jiangsu Province", zh: "江苏省南京市" },
      founded: { en: "1034 AD — Song Dynasty", zh: "1034年——宋代" },
      badge: { en: "Cultural Center", zh: "文化中心" },
      badgeColor: "bg-rose-700",
      desc: { en: "The Confucius Temple in Nanjing, set along the Qinhuai River, is one of China's most celebrated cultural landmarks. Originally an imperial school, it evolved into a center of culture, commerce, and entertainment. Today, the surrounding pedestrian district is one of China's most visited areas, combining Confucian heritage with vibrant cultural life.", zh: "南京夫子庙依秦淮河而建，是中国最具盛名的文化地标之一。起初为官学，后发展为文化、商业与娱乐中心。如今，周边步行街是中国最热门的游览区之一，将儒家文化遗产与生机勃勃的文化生活融为一体。" },
      highlights: { en: ["Dacheng Hall", "Qinhuai River Scenery", "Jiangnan Examination Hall", "Cultural Street"], zh: ["大成殿", "秦淮河风光", "江南贡院", "文化步行街"] },
    },
  ];

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 text-center" style={{ background: "linear-gradient(135deg, #1a0e00 0%, #3d2200 50%, #6b3d00 100%)" }}>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-[#c9a84c]/60" />
          <span className="text-[#c9a84c] text-xs tracking-[0.4em]">{t("SACRED SITES", "圣地书院")}</span>
          <div className="h-px w-12 bg-[#c9a84c]/60" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-widest mb-4">
          {t("Temples & Academies", "孔庙与书院")}
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-sm leading-7 px-4">
          {t(
            "From the UNESCO-listed sites in Qufu to the great academies that shaped Chinese scholarship — the living monuments of Confucian civilization.",
            "从曲阜的联合国世界遗产到塑造中国学术传统的伟大书院——儒家文明的活态纪念碑。"
          )}
        </p>
        <div className="flex justify-center gap-12 mt-10">
          {[
            { num: "3", en: "UNESCO Sites in Qufu", zh: "曲阜世界遗产" },
            { num: "2,500+", en: "Years of History", zh: "年历史" },
            { num: "4", en: "Great Academies", zh: "大书院" },
          ].map((s) => (
            <div key={s.num} className="text-center">
              <div className="text-2xl font-black text-[#c9a84c]">{s.num}</div>
              <div className="text-white/50 text-xs tracking-wider mt-1">{t(s.en, s.zh)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#fdf8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">{t("SIX GREAT SITES", "六大圣地")}</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sites.map((site) => (
              <div key={site.name.en} className="bg-white rounded-2xl overflow-hidden border border-[#e8d5b5] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-[#6b3d00] to-[#c9a84c]" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-[#3d2200] font-bold text-lg tracking-wider leading-tight">
                      {t(site.name.en, site.name.zh)}
                    </h3>
                    <span className={`shrink-0 text-xs px-2 py-1 rounded-full font-medium text-white ${site.badgeColor}`}>
                      {t(site.badge.en, site.badge.zh)}
                    </span>
                  </div>
                  <p className="text-[#c9a84c] text-xs flex items-center gap-1 mb-1">📍 {t(site.location.en, site.location.zh)}</p>
                  <p className="text-[#a08060] text-xs mb-4">🏛️ {t(site.founded.en, site.founded.zh)}</p>
                  <p className="text-[#7a5a3a] text-sm leading-7 mb-4">{t(site.desc.en, site.desc.zh)}</p>
                  <div className="border-t border-[#e8d5b5] pt-4">
                    <p className="text-[#a08060] text-xs mb-2 tracking-wider">{t("Highlights", "主要景点")}</p>
                    <div className="flex flex-wrap gap-2">
                      {tArr(site.highlights.en, site.highlights.zh).map((h: string) => (
                        <span key={h} className="text-xs px-2 py-1 bg-[#fdf0e0] text-[#6b3d00] rounded-md border border-[#e8d5b5]">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
