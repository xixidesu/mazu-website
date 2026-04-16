import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const highlights = [
  {
    icon: "🌊",
    title: "海上守护",
    desc: "妈祖作为海上保护神，千百年来护佑着无数渔民与航海者平安归来，被誉为【海上女神】。",
  },
  {
    icon: "🏛️",
    title: "千年历史",
    desc: "妈祖信仰起源于宋代福建湄洲岛，距今已有超过一千年的历史，是中华海洋文化的重要组成部分。",
  },
  {
    icon: "🌏",
    title: "世界传播",
    desc: "妈祖信仰随华人足迹遍及全球，在东南亚、台湾、香港、澳门及世界各地均建有妈祖宫庙。",
  },
  {
    icon: "🎭",
    title: "非遗瑰宝",
    desc: "2009年，妈祖信俗被列入联合国教科文组织人类非物质文化遗产代表作名录，举世瞩目。",
  },
];

const stories = [
  {
    title: "林默娘的传说",
    excerpt: "相传妈祖原名林默，生于北宋建隆元年，自幼聪慧异常，能预知海上风云变幻，屡次显灵救助遇难船只……",
    href: "/history",
  },
  {
    title: "湄洲祖庙",
    excerpt: "位于福建莆田湄洲岛的妈祖祖庙，是全球妈祖信众的朝圣圣地，每年吸引数百万信众前来祭拜……",
    href: "/temples",
  },
  {
    title: "妈祖民俗",
    excerpt: "每逢妈祖诞辰（农历三月廿三），各地宫庙举行盛大庆典，锣鼓喧天，花轿巡游，场面极为壮观……",
    href: "/culture",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a0a00 0%, #4a1010 40%, #8B1A1A 70%, #6b2020 100%)",
        }}
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #c9a84c 2px, transparent 2px), radial-gradient(circle at 75% 75%, #c9a84c 2px, transparent 2px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#c9a84c]/60" />
            <span className="text-[#c9a84c] text-sm tracking-[0.4em]">海上女神</span>
            <div className="h-px w-16 bg-[#c9a84c]/60" />
          </div>

          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-4 tracking-widest animate-fade-in-up"
            style={{ textShadow: "0 4px 20px rgba(201,168,76,0.4)" }}
          >
            妈祖
          </h1>

          <p className="text-[#c9a84c] text-xl sm:text-2xl tracking-[0.3em] mb-6 animate-fade-in-up animate-delay-200 font-light">
            千年信仰 · 海上守护
          </p>

          <p className="text-[#f5e6c8]/80 text-base sm:text-lg leading-8 max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-400">
            妈祖，中国海洋文化的精神象征，以慈悲之心护佑着海上儿女。
            她的传说跨越千年，信众遍及全球，是中华民族最广泛的民间信仰之一。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-600">
            <Link
              href="/history"
              className="px-8 py-3 bg-[#c9a84c] text-[#1a0a00] font-bold rounded-full hover:bg-yellow-400 transition-colors tracking-wider text-sm"
            >
              探索历史
            </Link>
            <Link
              href="/culture"
              className="px-8 py-3 border border-[#c9a84c]/60 text-[#c9a84c] font-bold rounded-full hover:bg-[#c9a84c]/10 transition-colors tracking-wider text-sm"
            >
              了解文化
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#c9a84c]/60">
          <span className="text-xs tracking-widest">向下探索</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#c9a84c]/60 to-transparent" />
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-[#fdf8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">妈祖精神</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3d0a0a] tracking-wider">
              信仰的力量
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8d5b5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-[#8B1A1A] font-bold text-lg mb-3 tracking-wider">
                  {item.title}
                </h3>
                <p className="text-[#5a3a2a] text-sm leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      {/* Stories */}
      <section className="py-20 bg-[#fff9f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em]">深入了解</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3d0a0a] tracking-wider">
              探索妈祖世界
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Link
                key={story.title}
                href={story.href}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e8d5b5] hover:shadow-lg transition-all duration-300"
              >
                <div className="h-3 bg-gradient-to-r from-[#8B1A1A] to-[#c9a84c]" />
                <div className="p-6">
                  <h3 className="text-[#3d0a0a] font-bold text-xl mb-3 tracking-wider group-hover:text-[#8B1A1A] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-[#7a5a3a] text-sm leading-7 mb-4">{story.excerpt}</p>
                  <span className="text-[#c9a84c] text-sm font-medium tracking-wider group-hover:underline">
                    阅读更多 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #3d0a0a 0%, #8B1A1A 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-5xl text-[#c9a84c]/30 font-serif leading-none select-none">&ldquo;</span>
          <p className="text-[#f5e6c8] text-xl sm:text-2xl leading-10 tracking-wider font-light -mt-4">
            慈悲护众生，灵应昭四海。
            <br />
            千年信俗绵延，妈祖精神永传。
          </p>
          <span className="text-5xl text-[#c9a84c]/30 font-serif leading-none select-none">&rdquo;</span>
        </div>
      </section>

      <Footer />
    </>
  );
}
