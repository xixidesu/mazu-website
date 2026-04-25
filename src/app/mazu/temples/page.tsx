import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mazuTempleImages } from "@/data/heritageImages";

const temples = [
  {
    name: "湄洲妈祖祖庙",
    location: "福建省莆田市湄洲岛",
    founded: "北宋雍熙四年（987年）",
    status: "妈祖祖庙",
    badge: "祖庙",
    desc: "湄洲妈祖祖庙是全球妈祖信众的精神故乡，建于妈祖升化之地。历经千年，现已发展成为规模宏大的庙宇建筑群，每年接待数百万朝圣信众。",
    highlights: ["天后宫大殿", "妈祖升天处", "妈祖石雕像", "朝圣广场"],
  },
  {
    name: "台中大甲镇澜宫",
    location: "台湾省台中市大甲区",
    founded: "清雍正八年（1730年）",
    status: "台湾最著名妈祖庙",
    badge: "台湾",
    desc: "镇澜宫每年农历三月举办的妈祖绕境进香活动，历时九天八夜，徒步超过300公里，参与信众数十万人，被誉为世界三大宗教庆典之一。",
    highlights: ["妈祖绕境进香", "正殿三川门", "妈祖文化园区", "妈祖夜市"],
  },
  {
    name: "澳门妈阁庙",
    location: "澳门特别行政区",
    founded: "明弘治元年（1488年）",
    status: "澳门最古老庙宇",
    badge: "澳门",
    desc: "妈阁庙是澳门现存最古老的庙宇，传说『澳门』之名即源于『妈阁』。这里是葡萄牙人登陆澳门时最先看到的地标，见证了中西文化的历史交汇。",
    highlights: ["石殿", "弘仁殿", "观音殿", "神山第一殿"],
  },
  {
    name: "天津天后宫",
    location: "天津市南开区",
    founded: "元泰定三年（1326年）",
    status: "华北最重要妈祖庙",
    badge: "华北",
    desc: "天津天后宫是华北地区现存最古老的妈祖庙，也是天津的发祥地之一。历史上天津作为北方最大的海上贸易港口，天后宫对城市发展有着重要影响。",
    highlights: ["正殿天后殿", "山门牌楼", "古文化街", "妈祖文化博物馆"],
  },
  {
    name: "泉州天后宫",
    location: "福建省泉州市",
    founded: "宋庆元二年（1196年）",
    status: "海上丝绸之路起点",
    badge: "闽南",
    desc: "泉州天后宫地处古代海上丝绸之路的起点，是中国现存规模最大的妈祖庙之一，也是全国重点文物保护单位，见证了宋元时期泉州的海上贸易辉煌。",
    highlights: ["正殿", "山门", "石坊", "祭祀广场"],
  },
  {
    name: "北港朝天宫",
    location: "台湾省云林县北港镇",
    founded: "清康熙三十三年（1694年）",
    status: "台湾四大妈祖庙之一",
    badge: "台湾",
    desc: "北港朝天宫是台湾历史最悠久、香火最旺盛的妈祖庙之一，以妈祖神轿驾前阵头著称，每逢妈祖诞辰，万人空巷，热闹非凡。",
    highlights: ["三川殿", "正殿", "妈祖文化纪念馆", "朝天宫老街"],
  },
];

const badgeColors: Record<string, string> = {
  祖庙: "bg-[#8B1A1A] text-white",
  台湾: "bg-blue-700 text-white",
  澳门: "bg-emerald-700 text-white",
  华北: "bg-amber-700 text-white",
  闽南: "bg-purple-700 text-white",
};

export default function TemplesPage() {
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
          <span className="text-[#c9a84c] text-xs tracking-[0.4em]">TEMPLES</span>
          <div className="h-px w-12 bg-[#c9a84c]/60" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-widest mb-4">
          宫庙圣地
        </h1>
        <p className="text-[#f5e6c8]/70 max-w-xl mx-auto text-sm leading-7 px-4 tracking-wide">
          从湄洲祖庙到世界各地，妈祖宫庙遍布四海，
          是海内外华人心中最重要的精神家园。
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-12 mt-10">
          {[
            { num: "5000+", label: "全球宫庙" },
            { num: "40+", label: "国家地区" },
            { num: "3亿", label: "信众人数" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-[#c9a84c]">{stat.num}</div>
              <div className="text-[#f5e6c8]/60 text-xs tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Temples Grid */}
      <section className="py-16 bg-[#fdf8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">著名宫庙</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl font-bold text-[#3d0a0a] tracking-wider">六大圣地</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {temples.map((temple) => (
              <div
                key={temple.name}
                className="bg-white rounded-2xl overflow-hidden border border-[#e8d5b5] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden bg-[#fdf0e0]">
                  <Image
                    src={mazuTempleImages[temple.name]}
                    alt={`${temple.name}实景照片`}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a00]/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs px-2 py-1 rounded-full bg-white/90 text-[#8B1A1A] font-medium">
                    实景照片
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-[#3d0a0a] font-bold text-lg tracking-wider leading-tight">
                      {temple.name}
                    </h3>
                    <span
                      className={`shrink-0 text-xs px-2 py-1 rounded-full font-medium ${
                        badgeColors[temple.badge] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {temple.badge}
                    </span>
                  </div>

                  <div className="space-y-1 mb-4">
                    <p className="text-[#c9a84c] text-xs flex items-center gap-1">
                      <span>📍</span> {temple.location}
                    </p>
                    <p className="text-[#a08060] text-xs flex items-center gap-1">
                      <span>🏛️</span> 创建于 {temple.founded}
                    </p>
                    <p className="text-[#8B1A1A] text-xs font-medium">{temple.status}</p>
                  </div>

                  <p className="text-[#7a5a3a] text-sm leading-7 mb-4">{temple.desc}</p>

                  <div className="border-t border-[#e8d5b5] pt-4">
                    <p className="text-[#a08060] text-xs mb-2 tracking-wider">主要景点</p>
                    <div className="flex flex-wrap gap-2">
                      {temple.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-2 py-1 bg-[#fdf0e0] text-[#8B1A1A] rounded-md border border-[#e8d5b5]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Tips */}
      <section className="py-16 bg-[#fff9f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">参拜礼仪</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl font-bold text-[#3d0a0a] tracking-wider">参拜须知</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#e8d5b5] shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "🙏", title: "着装得体", desc: "进入庙宇时应穿着整齐，避免过于暴露或不雅的着装，以示对神明的尊重。" },
                { icon: "🕯️", title: "虔诚上香", desc: "点香三炷，双手持香向天参拜，再依次向各殿神明行礼，祈求心愿。" },
                { icon: "🔇", title: "保持肃静", desc: "在庙宇内保持安静庄重，不嬉笑打闹，不大声喧哗，以维持神圣氛围。" },
                { icon: "📸", title: "拍照礼仪", desc: "拍照前应征得庙方同意，不对神像直接拍摄面部特写，尊重宗教信仰。" },
              ].map((tip) => (
                <div key={tip.title} className="flex gap-4">
                  <span className="text-2xl shrink-0">{tip.icon}</span>
                  <div>
                    <h4 className="text-[#3d0a0a] font-bold text-sm mb-1 tracking-wider">{tip.title}</h4>
                    <p className="text-[#7a5a3a] text-sm leading-6">{tip.desc}</p>
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
