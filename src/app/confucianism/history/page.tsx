"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";

export default function ConfucianismHistoryPage() {
  const { t } = useLang();

  const timeline = [
    { year: "551 BC", en: { era: "Spring & Autumn Period", title: "Birth of Confucius", desc: "Kong Qiu (Confucius) was born in Zou, in the state of Lu (present-day Shandong Province). His father died when he was three, and he was raised by his mother in modest circumstances, yet displayed an extraordinary passion for learning from an early age." }, zh: { era: "春秋时期", title: "孔子诞生", desc: "孔丘（孔子）生于鲁国陬邑（今山东省）。父亲在他三岁时去世，由母亲含辛茹苦抚养成人，自幼便展现出对学问的非凡热情。" } },
    { year: "517 BC", en: { era: "Age 34", title: "Journey to Zhou", desc: "Confucius traveled to the Zhou capital to study rites and music, and is said to have met Laozi, the founder of Taoism. This encounter deepened his understanding of ancient Chinese thought." }, zh: { era: "34岁", title: "赴周求学", desc: "孔子前往周都学习礼乐，据说曾与道家创始人老子相遇。这次会面深化了他对中国古代思想的理解。" } },
    { year: "501 BC", en: { era: "Age 50", title: "Political Career", desc: "Confucius was appointed Minister of Justice in the state of Lu, achieving significant political success. However, political intrigues forced him to leave his position and begin fourteen years of travel through various states." }, zh: { era: "50岁", title: "仕途起伏", desc: "孔子被任命为鲁国司寇，取得重要政绩。然而政治纷争迫使他离开职位，开始长达14年的周游列国之旅。" } },
    { year: "497–484 BC", en: { era: "The Wandering Years", title: "Journey Through the States", desc: "For fourteen years, Confucius traveled with his disciples through Wei, Chen, Cai, and other states, seeking a ruler willing to implement his principles of benevolent governance. Though never finding a patron, these travels shaped his philosophy." }, zh: { era: "周游列国", title: "颠沛流离", desc: "14年间，孔子率弟子周游卫、陈、蔡等国，寻访愿意实施仁政的君主。虽终未得遇明主，但这段旅程深刻塑造了他的哲学思想。" } },
    { year: "484 BC", en: { era: "Return to Lu", title: "Teaching & Writing", desc: "Confucius returned to Lu and devoted the final years of his life to teaching and editing ancient texts, including the Book of Songs, Book of History, and Spring and Autumn Annals." }, zh: { era: "归鲁", title: "执教著述", desc: "孔子返回鲁国，将晚年心血倾注于教学与整理古籍，包括《诗经》《尚书》与《春秋》。" } },
    { year: "479 BC", en: { era: "Death", title: "Legacy Begins", desc: "Confucius died at age 73. His disciples compiled his conversations and sayings into the Analects (Lunyu), which became the foundational text of Confucianism and one of history's most influential books." }, zh: { era: "逝世", title: "身后传世", desc: "孔子逝世，享年73岁。弟子们将其言行整理编撰为《论语》，成为儒家思想的奠基经典，也是人类历史上最具影响力的著作之一。" } },
    { year: "136 BC", en: { era: "Han Dynasty", title: "State Philosophy", desc: "Emperor Wu of Han officially adopted Confucianism as the state philosophy, establishing the Imperial Academy (Taixue) to teach Confucian classics. This began Confucianism's 2,000-year dominance of Chinese intellectual and political life." }, zh: { era: "汉代", title: "独尊儒术", desc: "汉武帝正式采纳儒学为国家哲学，设立太学专授儒家经典。儒学由此开启了长达2000年主导中国思想与政治生活的历史。" } },
    { year: "2009", en: { era: "Modern Era", title: "UNESCO Heritage", desc: "The Temple, Cemetery, and Kong Family Mansion of Confucius in Qufu were reaffirmed as a UNESCO World Heritage Site, recognizing their outstanding universal value as a living testament to Confucian civilization." }, zh: { era: "现代", title: "世界遗产", desc: "曲阜孔庙、孔林、孔府再度获得联合国教科文组织世界遗产认定，被认可为儒家文明的杰出普世价值见证。" } },
  ];

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 text-center" style={{ background: "linear-gradient(135deg, #1a0e00 0%, #3d2200 50%, #6b3d00 100%)" }}>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-[#c9a84c]/60" />
          <span className="text-[#c9a84c] text-xs tracking-[0.4em]">{t("HISTORY", "历史")}</span>
          <div className="h-px w-12 bg-[#c9a84c]/60" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-widest mb-4">
          {t("Life of Confucius", "孔子生平")}
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-sm leading-7 px-4 tracking-wide">
          {t(
            "From a humble birth in the state of Lu to becoming the most influential philosopher in Chinese history — the remarkable journey of Kong Qiu.",
            "从鲁国的平凡出身，到成为中国历史上最具影响力的哲学家——孔丘的非凡人生历程。"
          )}
        </p>
      </section>

      {/* Bio */}
      <section className="py-16 bg-[#fdf8f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#e8d5b5] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📜</span>
              <h2 className="text-2xl font-bold text-[#3d2200] tracking-wider">{t("Who Was Confucius?", "孔子是谁？")}</h2>
            </div>
            <div className="space-y-5 text-[#5a3a2a] leading-8 text-base">
              <p>{t(
                "Confucius (551–479 BC), born Kong Qiu and known by the honorific Zhongni, was a Chinese philosopher, teacher, and political theorist whose ideas have profoundly influenced East Asian thought for over 2,500 years. He lived during the turbulent Spring and Autumn period, when the Zhou dynasty was declining and rival states competed for supremacy.",
                "孔子（前551—前479年），名丘，字仲尼，是中国哲学家、教育家与政治思想家，其思想深刻影响东亚文明逾2500年。他生活在动荡的春秋时期，彼时周朝衰落，诸侯争霸。"
              )}</p>
              <p>{t(
                "Despite facing poverty, political exile, and personal tragedy, Confucius devoted his life to two great missions: restoring social harmony through ethical governance, and educating anyone who sought knowledge regardless of social class. He is traditionally credited with having 3,000 students, including 72 who mastered his teachings.",
                "尽管历经贫困、政治流亡与个人磨难，孔子毕生致力于两大使命：通过道德治国恢复社会和谐；以及不分贵贱、广收门徒、传授知识。据传他有弟子三千，其中七十二人深得其精髓。"
              )}</p>
              <p>{t(
                "His teachings, centered on ren (benevolence), yi (righteousness), and li (ritual propriety), were revolutionary in emphasizing moral self-cultivation over birthright. He believed that a just society depended not on noble birth, but on cultivated virtue — a radical idea in a strictly hierarchical era.",
                "孔子的思想以仁、义、礼为核心，强调道德修养而非出身门第，具有革命性意义。他认为公正社会的根基不在于高贵血统，而在于道德修养——这在等级森严的时代是极为激进的理念。"
              )}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[#fff9f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">{t("TIMELINE", "时间线")}</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl font-bold text-[#3d2200] tracking-wider">{t("From Birth to Legacy", "从诞生到传世")}</h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-[#c9a84c]/30 -translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-start gap-6 sm:gap-0 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className="absolute left-6 sm:left-1/2 w-3 h-3 bg-[#c9a84c] rounded-full -translate-x-1/2 mt-5 z-10 ring-2 ring-[#fff9f0]" />
                  <div className={`ml-14 sm:ml-0 sm:w-[45%] bg-white rounded-xl p-5 border border-[#e8d5b5] shadow-sm ${index % 2 === 0 ? "sm:mr-[10%]" : "sm:ml-[10%]"}`}>
                    <span className="text-[#c9a84c] text-xs font-bold tracking-wider">{item.year} · {t(item.en.era, item.zh.era)}</span>
                    <h3 className="text-[#3d2200] font-bold text-base mt-1 mb-2 tracking-wide">{t(item.en.title, item.zh.title)}</h3>
                    <p className="text-[#7a5a3a] text-sm leading-6">{t(item.en.desc, item.zh.desc)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
