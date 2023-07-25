"use client";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en" className={noto.className}>
        <body suppressHydrationWarning={true} className="text-body">
          {children}
        </body>
        {/* Footer */}
      </html>
    </RecoilRoot>
  );
}
