import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timeline = [
  {
    year: "960年",
    era: "北宋建隆元年",
    title: "林默娘诞生",
    desc: "妈祖原名林默，出生于福建路兴化军莆田县湄洲岛，相传出生时不哭不闹，因此得名『默』。其父林愿为官，家道殷实，深信道佛。",
  },
  {
    year: "987年",
    era: "宋太宗雍熙四年",
    title: "升化羽登",
    desc: "林默年仅二十八岁，在湄洲岛升化，成为海上保护神。传说她在海上显灵，救助遇难船只，被渔民奉为海神。",
  },
  {
    year: "1123年",
    era: "宋徽宗宣和五年",
    title: "首获朝廷敕封",
    desc: "宋廷赐额『顺济』，这是妈祖首次获得朝廷正式认可，标志着妈祖信仰开始走向官方化。",
  },
  {
    year: "1278年",
    era: "元世祖至元十五年",
    title: "封为天妃",
    desc: "元世祖忽必烈封妈祖为『护国明著天妃』，妈祖地位大幅提升，信仰随元朝海上贸易传播至更广泛地区。",
  },
  {
    year: "1684年",
    era: "清康熙二十三年",
    title: "晋封天后",
    desc: "康熙帝将妈祖晋封为『天后』，与『天妃』的称号相比地位更高，妈祖由此成为中国民间最高级别的女神之一。",
  },
  {
    year: "2009年",
    era: "现代",
    title: "列入世界非遗",
    desc: "妈祖信俗被联合国教科文组织列入《人类非物质文化遗产代表作名录》，成为全人类共同的文化遗产。",
  },
];

export default function HistoryPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section
        className="pt-32 pb-16 text-center"
        style={{
          background: "linear-gradient(135deg, #1a0a00 0%, #4a1010 50%, #8B1A1A 100%)",
        }}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-[#c9a84c]/60" />
          <span className="text-[#c9a84c] text-xs tracking-[0.4em]">HISTORY</span>
          <div className="h-px w-12 bg-[#c9a84c]/60" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-widest mb-4">
          历史起源
        </h1>
        <p className="text-[#f5e6c8]/70 max-w-xl mx-auto text-sm leading-7 px-4 tracking-wide">
          从一位普通渔女到万民敬仰的海上女神，妈祖的故事跨越千年，见证了中华海洋文明的发展历程。
        </p>
      </section>

      {/* Origin Story */}
      <section className="py-16 bg-[#fdf8f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#e8d5b5] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌊</span>
              <h2 className="text-2xl font-bold text-[#3d0a0a] tracking-wider">林默娘的传说</h2>
            </div>
            <div className="space-y-5 text-[#5a3a2a] leading-8 text-base">
              <p>
                妈祖，俗称天上圣母、天后，原名<strong className="text-[#8B1A1A]">林默</strong>，
                又称林默娘，北宋建隆元年（960年）农历三月廿三日出生于福建路兴化军莆田县湄洲岛。
                传说她出生时满室异香，经久不散，赤光照耀，因出生至满月一声不哭，故名"默"。
              </p>
              <p>
                林默自幼聪慧，八岁从塾师启蒙读书，悟性超群，十岁余便能诵经礼佛。十三岁时，
                遇道士玄通授以"玄微秘法"，尽得其奥，能察知海上风云变幻，预知吉凶。
              </p>
              <p>
                相传她能<strong className="text-[#8B1A1A]">乘席渡海</strong>，在惊涛骇浪中救助遇难渔民。
                有一次，父兄出海遭遇风浪，林默在机杼前神情恍惚，后被唤醒，
                但仍救回了父亲，其兄却因被唤醒而未能及时救回。这一传说广为流传，
                成为妈祖神格的重要组成部分。
              </p>
              <p>
                宋雍熙四年（987年），年仅二十八岁的林默在湄洲岛羽化升天。
                此后屡显灵异，护佑航海者平安，当地渔民尊奉她为海神，
                在湄洲岛立庙祭祀，妈祖信仰由此发端。
              </p>
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
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">时间线</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl font-bold text-[#3d0a0a] tracking-wider">千年封号历程</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-[#c9a84c]/30 -translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 w-3 h-3 bg-[#c9a84c] rounded-full -translate-x-1/2 mt-5 z-10 ring-2 ring-[#fff9f0]" />

                  {/* Content */}
                  <div
                    className={`ml-14 sm:ml-0 sm:w-[45%] bg-white rounded-xl p-5 border border-[#e8d5b5] shadow-sm ${
                      index % 2 === 0 ? "sm:mr-[10%]" : "sm:ml-[10%]"
                    }`}
                  >
                    <span className="text-[#c9a84c] text-xs font-bold tracking-wider">{item.year} · {item.era}</span>
                    <h3 className="text-[#3d0a0a] font-bold text-base mt-1 mb-2 tracking-wide">{item.title}</h3>
                    <p className="text-[#7a5a3a] text-sm leading-6">{item.desc}</p>
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
