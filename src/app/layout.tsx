import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Goddesses in China — Chinese Cultural Traditions",
  description: "Explore the rich spiritual and cultural traditions of China, including Mazu, Confucianism, Taoism, and more.",
  keywords: "Mazu, Confucianism, Taoism, Guan Yu, Chinese culture, Chinese religion, Chinese mythology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerifSC.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-noto-serif-sc)]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
