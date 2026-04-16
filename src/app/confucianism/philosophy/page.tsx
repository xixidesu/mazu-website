"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";

export default function ConfucianismPhilosophyPage() {
  const { t } = useLang();

  const virtues = [
    { char: "仁", pinyin: "Rén", en: { name: "Benevolence", desc: "The highest Confucian virtue — the capacity to love others and act with compassion, empathy, and goodwill. Confucius placed Ren at the core of all ethical conduct, describing it as 'loving people.'" }, zh: { name: "仁", desc: "儒家最高美德——关爱他人、以慈悲、同理心与善意行事的能力。孔子将仁置于一切道德行为的核心，称之为『爱人』。" } },
    { char: "义", pinyin: "Yì", en: { name: "Righteousness", desc: "Moral rightness and justice — doing what is right because it is right, not for personal gain. Yi emphasizes duty, loyalty, and acting in accordance with moral principles even under pressure." }, zh: { name: "义", desc: "道德正义——因其正确而为之，而非为谋私利。义强调责任、忠诚，以及在压力下依然坚守道德原则。" } },
    { char: "礼", pinyin: "Lǐ", en: { name: "Ritual Propriety", desc: "The observance of social rituals, norms, and etiquette that maintain social harmony. Li encompasses everything from family ceremonies to court protocol, creating a framework for respectful human interaction." }, zh: { name: "礼", desc: "遵守维护社会和谐的礼仪规范。礼涵盖从家族仪式到朝廷礼制的一切，为恭敬的人际交往提供规范框架。" } },
    { char: "智", pinyin: "Zhì", en: { name: "Wisdom", desc: "Moral knowledge and the ability to discern right from wrong. Zhi is not merely intellectual intelligence, but the practical wisdom to apply ethical principles correctly in complex real-world situations." }, zh: { name: "智", desc: "道德认知与辨别是非的能力。智不仅是智识层面的聪明，更是在复杂现实情境中正确运用伦理原则的实践智慧。" } },
    { char: "信", pinyin: "Xìn", en: { name: "Integrity", desc: "Faithfulness, honesty, and keeping one's word. Xin means being true to oneself and others — fulfilling promises and speaking truthfully, forming the bedrock of trustworthy relationships and stable society." }, zh: { name: "信", desc: "诚实守信、言出必行。信意味着对自己和他人诚实——践行诺言、如实表达，是可信赖关系与稳定社会的基石。" } },
  ];

  const relationships = [
    { en: { pair: "Ruler & Subject", desc: "The ruler governs with benevolence; the subject serves with loyalty. Both sides bear moral obligations toward each other." }, zh: { pair: "君臣", desc: "君主以仁爱治国，臣下以忠诚事君。双方各有道德义务。" } },
    { en: { pair: "Parent & Child", desc: "Parents nurture with love; children honor with filial piety (Xiao). The family is the foundation of all social order." }, zh: { pair: "父子", desc: "父母以慈爱养育，子女以孝道报恩。家庭是一切社会秩序的根基。" } },
    { en: { pair: "Husband & Wife", desc: "Husband leads with righteousness; wife responds with obedience and care. Marriage is a complementary partnership with distinct roles." }, zh: { pair: "夫妇", desc: "夫以义率，妇以顺从与关爱相应。婚姻是角色互补的伙伴关系。" } },
    { en: { pair: "Elder & Younger", desc: "Elders guide with wisdom; younger siblings show respect and deference. Age-based hierarchy fosters social continuity." }, zh: { pair: "兄弟", desc: "长兄以智慧引导，幼弟以尊重相待。以年龄为序的层级关系促进社会的延续。" } },
    { en: { pair: "Friend & Friend", desc: "The only equal relationship — built on mutual trust, honesty, and shared virtue. True friendship transcends personal advantage." }, zh: { pair: "朋友", desc: "唯一平等的关系——以相互信任、诚实与共同美德为基础。真正的友谊超越个人利益。" } },
  ];

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 text-center" style={{ background: "linear-gradient(135deg, #1a0e00 0%, #3d2200 50%, #6b3d00 100%)" }}>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-[#c9a84c]/60" />
          <span className="text-[#c9a84c] text-xs tracking-[0.4em]">{t("PHILOSOPHY", "哲学思想")}</span>
          <div className="h-px w-12 bg-[#c9a84c]/60" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-widest mb-4">
          {t("Core Philosophy", "核心思想")}
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-sm leading-7 px-4">
          {t(
            "The ethical framework that shaped Chinese civilization for 2,500 years — from the Five Virtues to the Five Relationships.",
            "塑造中华文明2500年的伦理体系——从五常到五伦。"
          )}
        </p>
      </section>

      {/* Five Virtues */}
      <section className="py-16 bg-[#fdf8f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">{t("THE FIVE VIRTUES", "五常")}</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl font-bold text-[#3d2200] tracking-wider">{t("Wuchang — The Five Constants", "五常之德")}</h2>
            <p className="text-[#7a5a3a] text-sm mt-3 max-w-xl mx-auto leading-7">
              {t(
                "The five core virtues that every Confucian gentleman (junzi) must cultivate to achieve moral perfection and contribute to a harmonious society.",
                "君子必须修习的五种核心美德，以臻道德完善，为和谐社会作出贡献。"
              )}
            </p>
          </div>

          <div className="space-y-5">
            {virtues.map((v) => (
              <div key={v.char} className="bg-white rounded-2xl p-6 border border-[#e8d5b5] shadow-sm flex gap-6 items-start">
                <div className="shrink-0 w-16 h-16 bg-gradient-to-br from-[#6b3d00] to-[#c9a84c] rounded-xl flex flex-col items-center justify-center text-white">
                  <span className="text-2xl font-black">{v.char}</span>
                  <span className="text-[10px] opacity-70">{v.pinyin}</span>
                </div>
                <div>
                  <h3 className="text-[#3d2200] font-bold text-lg tracking-wider mb-2">
                    {v.char} — {t(v.en.name, v.zh.name)}
                  </h3>
                  <p className="text-[#7a5a3a] text-sm leading-7">{t(v.en.desc, v.zh.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Relationships */}
      <section className="py-16 bg-[#fff9f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">{t("THE FIVE RELATIONSHIPS", "五伦")}</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl font-bold text-[#3d2200] tracking-wider">{t("Wulun — The Five Bonds", "五伦关系")}</h2>
            <p className="text-[#7a5a3a] text-sm mt-3 max-w-xl mx-auto leading-7">
              {t(
                "Confucius identified five fundamental human relationships, each with reciprocal obligations. When properly observed, these bonds create a harmonious society from family to state.",
                "孔子提出五种基本人伦关系，每种关系都有相互的义务。若能切实履行，这些伦常关系将从家庭到国家构建起和谐社会。"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relationships.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-[#e8d5b5] shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 bg-[#6b3d00] rounded-full flex items-center justify-center text-[#c9a84c] text-xs font-bold">{i + 1}</div>
                  <h3 className="text-[#3d2200] font-bold tracking-wider">{t(r.en.pair, r.zh.pair)}</h3>
                </div>
                <p className="text-[#7a5a3a] text-sm leading-7">{t(r.en.desc, r.zh.desc)}</p>
              </div>
            ))}
            <div className="bg-gradient-to-br from-[#6b3d00] to-[#c9a84c] rounded-xl p-5 flex items-center justify-center text-center">
              <p className="text-white text-sm leading-7 font-medium">
                {t(
                  '"When you know a thing, hold that you know it; when you do not know a thing, allow that you do not know it — this is knowledge." — Confucius',
                  '"知之为知之，不知为不知，是知也。" — 孔子'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Junzi */}
      <section className="py-16 bg-[#fdf8f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#e8d5b5] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">👑</span>
              <h2 className="text-2xl font-bold text-[#3d2200] tracking-wider">
                {t("The Junzi — The Noble Person", "君子之道")}
              </h2>
            </div>
            <div className="space-y-5 text-[#5a3a2a] leading-8 text-sm sm:text-base">
              <p>{t(
                "Central to Confucian ethics is the concept of the junzi (君子) — literally 'son of a ruler,' but redefined by Confucius as the morally superior person. Unlike the hereditary aristocrat, the junzi earns their status through virtue, learning, and self-cultivation.",
                "儒家伦理的核心是『君子』概念——字面意思为『君主之子』，但孔子将其重新定义为道德高尚之人。与世袭贵族不同，君子通过美德、学识与修身来成就自身。"
              )}</p>
              <p>{t(
                "The junzi constantly examines their own character, practices the five virtues, fulfills their social obligations, and serves as a moral exemplar for others. Confucius believed that if rulers were junzi, good governance would naturally follow — and if individuals cultivated virtue, family and state would flourish.",
                "君子时刻审视自身品格，践行五常，履行社会责任，成为他人的道德典范。孔子认为，若君主皆为君子，善政自然随之而来；若个人修德，则家国自然昌盛。"
              )}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
