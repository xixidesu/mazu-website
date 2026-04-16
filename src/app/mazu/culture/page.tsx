import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const festivals = [
  {
    icon: "🎊",
    name: "妈祖诞辰",
    date: "农历三月廿三",
    desc: "妈祖诞辰庆典是全年最盛大的妈祖节庆活动，各地宫庙举办迎神绕境、祭典大典，万人空巷，热闹非凡。",
  },
  {
    icon: "🌙",
    name: "妈祖升天纪念",
    date: "农历九月初九",
    desc: "纪念妈祖升天的节日，信众齐聚宫庙，举行隆重祭典，燃放炮仗，祈求海上平安、风调雨顺。",
  },
  {
    icon: "🏮",
    name: "元宵绕境",
    date: "农历正月十五",
    desc: "元宵节期间，各地妈祖宫庙举行传统绕境活动，神轿巡游街道，护佑一方百姓平安幸福。",
  },
];

const rituals = [
  {
    title: "进香",
    desc: "信众到妈祖庙烧香祈福，表达对妈祖的崇敬，祈求出海平安、家庭和顺。进香是最基本的信仰表达方式。",
  },
  {
    title: "绕境",
    desc: "将妈祖神像请出庙外，用神轿抬着巡游境内各处，象征妈祖出巡视察，护佑信众，驱邪避煞。",
  },
  {
    title: "祭典",
    desc: "按照传统礼仪，摆放三牲五果、鲜花糕饼等供品，由道士或法师主持祭典，诵经礼拜，祈求神明庇佑。",
  },
  {
    title: "扶乩",
    desc: "通过扶乩方式请妈祖降临，传递神谕，为信众解惑答疑。这是一种较为古老的神明信仰仪式。",
  },
  {
    title: "掷筊",
    desc: '使用"筊杯"（两片月牙形木片）向妈祖请示，通过抛掷后的正反组合判断神明旨意，是最常见的问卜方式。',
  },
  {
    title: "还愿",
    desc: "信众在愿望实现后，回到妈祖庙酬神还愿，或演戏，或献花，或捐献香油钱，表达对妈祖庇佑的感恩之情。",
  },
];

const spread = [
  { region: "台湾", desc: "台湾有超过900座妈祖庙，是岛内最主要的民间信仰，台中大甲镇澜宫的妈祖绕境活动被誉为世界三大宗教庆典之一。" },
  { region: "东南亚", desc: "随华人移民传播至马来西亚、新加坡、越南、菲律宾等地，当地华人社区普遍建有妈祖庙，凝聚海外华人情感。" },
  { region: "港澳", desc: "澳门的妈祖阁庙建于1488年，是澳门最古老的庙宇，『澳门』之名据说也源于『妈阁』的谐音。" },
  { region: "欧美", desc: "随华人移民在欧美各大城市建立妈祖庙，妈祖文化已成为海外华人联系故土、维系文化认同的重要纽带。" },
];

export default function CulturePage() {
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
          <span className="text-[#c9a84c] text-xs tracking-[0.4em]">CULTURE</span>
          <div className="h-px w-12 bg-[#c9a84c]/60" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-widest mb-4">
          民俗文化
        </h1>
        <p className="text-[#f5e6c8]/70 max-w-xl mx-auto text-sm leading-7 px-4 tracking-wide">
          妈祖信俗是中国南方沿海地区最具代表性的民间信仰，承载着独特的海洋文化传统与精神内涵。
        </p>
      </section>

      {/* Festivals */}
      <section className="py-16 bg-[#fdf8f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">节庆活动</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl font-bold text-[#3d0a0a] tracking-wider">妈祖节庆</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {festivals.map((f) => (
              <div
                key={f.name}
                className="bg-white rounded-2xl overflow-hidden border border-[#e8d5b5] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-2 bg-gradient-to-r from-[#8B1A1A] to-[#c9a84c]" />
                <div className="p-6 text-center">
                  <span className="text-5xl block mb-3">{f.icon}</span>
                  <h3 className="text-[#3d0a0a] font-bold text-lg tracking-wider mb-1">{f.name}</h3>
                  <span className="text-[#c9a84c] text-xs font-medium tracking-wider">{f.date}</span>
                  <p className="text-[#7a5a3a] text-sm leading-7 mt-3">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rituals */}
      <section className="py-16 bg-[#fff9f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">祭祀仪式</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl font-bold text-[#3d0a0a] tracking-wider">信仰仪式</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rituals.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-xl p-5 border border-[#e8d5b5] shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-5 bg-[#8B1A1A] rounded-full" />
                  <h3 className="text-[#3d0a0a] font-bold text-base tracking-wider">{r.title}</h3>
                </div>
                <p className="text-[#7a5a3a] text-sm leading-7">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World Spread */}
      <section className="py-16 bg-[#fdf8f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">全球传播</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl font-bold text-[#3d0a0a] tracking-wider">妈祖走向世界</h2>
            <p className="text-[#7a5a3a] text-sm mt-3 max-w-xl mx-auto leading-7">
              随着华人迁徙，妈祖信仰从福建湄洲岛出发，传遍全球四十多个国家和地区，
              信众约3亿人，宫庙超过5000座。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {spread.map((s) => (
              <div
                key={s.region}
                className="bg-white rounded-xl p-6 border border-[#e8d5b5] shadow-sm flex gap-4"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 bg-[#8B1A1A] rounded-full flex items-center justify-center text-[#c9a84c] font-bold text-sm">
                    {s.region[0]}
                  </div>
                </div>
                <div>
                  <h3 className="text-[#3d0a0a] font-bold mb-2 tracking-wider">{s.region}</h3>
                  <p className="text-[#7a5a3a] text-sm leading-7">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNESCO Banner */}
      <section
        className="py-14 text-center"
        style={{ background: "linear-gradient(135deg, #3d0a0a 0%, #8B1A1A 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#c9a84c] text-xs tracking-[0.4em] mb-4">UNESCO 人类非物质文化遗产</p>
          <p className="text-white text-lg sm:text-xl leading-9 tracking-wider">
            2009年，妈祖信俗正式列入
            <br />
            <strong className="text-[#c9a84c]">联合国教科文组织人类非物质文化遗产代表作名录</strong>
          </p>
          <p className="text-[#f5e6c8]/60 text-sm mt-4 tracking-wide">
            成为全人类共同珍视的文化遗产
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
