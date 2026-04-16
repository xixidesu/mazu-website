import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "妈祖文化 — 海上守护神",
  description: "探索妈祖文化的历史渊源、民间传说与海洋信仰，感受千年妈祖精神的传承与魅力。",
  keywords: "妈祖,海神,妈祖文化,湄洲岛,海上保护神,闽南文化",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSerifSC.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-noto-serif-sc)]">
        {children}
      </body>
    </html>
  );
}
