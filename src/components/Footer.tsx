import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3d0a0a] text-[#f5e6c8] border-t border-[#c9a84c]/30">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⛵</span>
              <span className="text-[#c9a84c] text-lg font-bold tracking-widest">妈祖文化</span>
            </div>
            <p className="text-[#d4b896] text-sm leading-7">
              妈祖是中国最重要的海神信仰之一，护佑着千千万万的渔民与航海者，
              其文化遗产已被列入联合国教科文组织人类非物质文化遗产代表作名录。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#c9a84c] font-semibold mb-4 tracking-wider">探索内容</h3>
            <ul className="space-y-2 text-sm text-[#d4b896]">
              <li><Link href="/history" className="hover:text-[#c9a84c] transition-colors">历史起源</Link></li>
              <li><Link href="/culture" className="hover:text-[#c9a84c] transition-colors">民俗文化</Link></li>
              <li><Link href="/temples" className="hover:text-[#c9a84c] transition-colors">宫庙圣地</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-[#c9a84c] font-semibold mb-4 tracking-wider">妈祖信息</h3>
            <ul className="space-y-2 text-sm text-[#d4b896]">
              <li>诞辰：农历三月廿三</li>
              <li>升天：农历九月初九</li>
              <li>发源地：福建湄洲岛</li>
              <li>信众：约3亿人</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#c9a84c]/20 text-center text-[#a08060] text-xs tracking-widest">
          <p>妈祖文化 · 海上守护 · 千年传承</p>
        </div>
      </div>
    </footer>
  );
}
