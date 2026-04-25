"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";
import { mazuPhotos } from "@/data/heritageImages";

export default function MazuPage() {
  const { t } = useLang();

  const highlights = [
    { icon: "🌊", en: { title: "Guardian of the Sea", desc: "For over a thousand years, Mazu has protected sailors and fishermen, guiding them safely through storms and treacherous waters." }, zh: { title: "海上守护", desc: "千百年来，妈祖护佑着无数渔民与航海者，引领他们穿越风浪，平安归来。" } },
    { icon: "🏛️", en: { title: "Thousand-Year Legacy", desc: "Originating in Song Dynasty Fujian, Mazu worship has endured for over 1,000 years as a cornerstone of Chinese maritime culture." }, zh: { title: "千年历史", desc: "妈祖信仰起源于宋代福建，延续逾千年，是中华海洋文化的重要基石。" } },
    { icon: "🌏", en: { title: "Global Reach", desc: "Mazu temples span 46 countries and regions, with an estimated 300 million devotees worldwide following the Chinese diaspora." }, zh: { title: "遍布全球", desc: "妈祖宫庙遍布46个国家和地区，全球约3亿信众，随华人足迹走向世界。" } },
    { icon: "🎭", en: { title: "UNESCO Heritage", desc: "In 2009, Mazu belief and customs were inscribed on the UNESCO Representative List of Intangible Cultural Heritage of Humanity." }, zh: { title: "非遗瑰宝", desc: "2009年，妈祖信俗被列入联合国教科文组织人类非物质文化遗产代表作名录。" } },
  ];

  const sections = [
    { href: "/mazu/history", icon: "📖", en: { title: "History & Origins", excerpt: "Born Lin Mo in 960 AD on Meizhou Island, Fujian, she was said to possess miraculous abilities to calm storms and rescue sailors at sea..." }, zh: { title: "历史起源", excerpt: "相传妈祖原名林默，生于公元960年福建湄洲岛，天生具有平息风浪、救助海难的神异能力……" } },
    { href: "/mazu/temples", icon: "🏯", en: { title: "Sacred Temples", excerpt: "From the ancestral temple on Meizhou Island to the grand Zhenlan Temple in Taiwan, Mazu temples are spiritual centers for millions of devotees..." }, zh: { title: "宫庙圣地", excerpt: "从湄洲岛祖庙到台湾镇澜宫，妈祖宫庙是数百万信众的精神圣地……" } },
    { href: "/mazu/culture", icon: "🎊", en: { title: "Customs & Festivals", excerpt: "The annual Mazu pilgrimage in Taiwan — covering 300km over nine days — is considered one of the world's three greatest religious events..." }, zh: { title: "民俗文化", excerpt: "台湾一年一度的妈祖绕境进香，历时九天、徒步超过300公里，被誉为世界三大宗教庆典之一……" } },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #020d18 0%, #0a2540 40%, #0d3d6e 70%, #0a2540 100%)" }}
      >
        <Image
          src={mazuPhotos[0].src}
          alt={mazuPhotos[0].alt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020d18]/70 via-[#0a2540]/70 to-[#020d18]/95" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #4a9eca 1px, transparent 1px), radial-gradient(circle at 80% 20%, #c9a84c 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#4a9eca]/60" />
            <span className="text-[#4a9eca] text-xs tracking-[0.5em]">{t("SEA GODDESS OF CHINA", "中国海上女神")}</span>
            <div className="h-px w-16 bg-[#4a9eca]/60" />
          </div>
          <h1 className="text-7xl sm:text-8xl font-black text-white mb-2 tracking-widest" style={{ textShadow: "0 4px 30px rgba(74,158,202,0.4)" }}>
            {t("Mazu", "妈祖")}
          </h1>
          <p className="text-[#4a9eca] text-xl tracking-[0.3em] mb-6 font-light">
            {t("Goddess of the Sea · Protector of Sailors", "千年信仰 · 海上守护")}
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-8 max-w-2xl mx-auto mb-10">
            {t(
              "Mazu is China's most revered sea goddess, worshipped by millions across the globe. Her legend spans over a millennium, from a gifted young woman on Fujian's Meizhou Island to a divine protector enshrined in thousands of temples worldwide.",
              "妈祖是中国最受崇敬的海神，全球数百万信众虔诚敬奉。她的传说绵延千年，从福建湄洲岛的奇女子，到被世界各地数千座宫庙供奉的海上守护神。"
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/mazu/history" className="px-8 py-3 bg-[#4a9eca] text-white font-bold rounded-full hover:bg-[#6ab4e0] transition-colors tracking-wider text-sm">
              {t("Explore History", "探索历史")}
            </Link>
            <Link href="/mazu/temples" className="px-8 py-3 border border-[#4a9eca]/60 text-[#4a9eca] font-bold rounded-full hover:bg-[#4a9eca]/10 transition-colors tracking-wider text-sm">
              {t("Sacred Temples", "宫庙圣地")}
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Story */}
      <section className="py-20 bg-[#071b2d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#4a9eca]/70" />
                <span className="text-[#4a9eca] text-xs tracking-[0.4em]">{t("REAL PHOTOS", "实景照片")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-wider mb-5">
                {t("Mazu Through Your Lens", "你镜头里的妈祖")}
              </h2>
              <p className="text-white/65 leading-8 text-sm sm:text-base">
                {t(
                  "These images come from your uploaded Mazu photo set, bringing the temple gates, corridors, ritual atmosphere, and material details into the story.",
                  "这些图片来自你上传的妈祖照片，让宫庙门楼、廊道、祭祀氛围与信仰细节真正进入页面叙事。"
                )}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {mazuPhotos.map((photo, index) => (
                <figure
                  key={photo.src}
                  className={`group relative overflow-hidden rounded-xl border border-[#4a9eca]/20 bg-[#0a2540] ${index === 1 ? "min-h-80 sm:row-span-2" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-10">
                    <p className="text-white text-sm font-bold tracking-wider">{t(photo.title.en, photo.title.zh)}</p>
                    <p className="text-white/55 text-xs mt-1">{t(photo.caption.en, photo.caption.zh)}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-[#fdf8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#4a9eca]" />
              <span className="text-[#4a9eca] text-xs tracking-[0.4em]">{t("KEY FACTS", "核心内容")}</span>
              <div className="h-px w-12 bg-[#4a9eca]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1a2a3a] tracking-wider">{t("The Power of Mazu", "妈祖的力量")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#d0e8f5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-[#0d3d6e] font-bold text-lg mb-3 tracking-wider">{t(item.en.title, item.zh.title)}</h3>
                <p className="text-[#3a5a7a] text-sm leading-7">{t(item.en.desc, item.zh.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 bg-[#f0f7ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1a2a3a] tracking-wider">{t("Explore Mazu", "深入了解妈祖")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white rounded-2xl overflow-hidden border border-[#d0e8f5] hover:shadow-lg transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-[#0d3d6e] to-[#4a9eca]" />
                <div className="p-6">
                  <span className="text-3xl block mb-3">{s.icon}</span>
                  <h3 className="text-[#1a2a3a] font-bold text-xl mb-3 tracking-wider group-hover:text-[#0d3d6e] transition-colors">{t(s.en.title, s.zh.title)}</h3>
                  <p className="text-[#5a7a9a] text-sm leading-7 mb-4">{t(s.en.excerpt, s.zh.excerpt)}</p>
                  <span className="text-[#4a9eca] text-sm font-medium tracking-wider group-hover:underline">{t("Read more →", "阅读更多 →")}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
