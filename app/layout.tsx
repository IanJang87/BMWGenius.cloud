import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bmwFont = localFont({
  src: "../public/BMWTypeNextKrTT-Thin.ttf",
  variable: "--font-bmw",
  weight: "100",
});

export const metadata: Metadata = {
  title: "BMW Genius Cloud",
  applicationName: "BMW Cloud",
  manifest: "/manifest.json",
  appleWebApp: { title: "BMW Cloud" },
  icons: {
    icon: "/bmw-icon.png",
    apple: "/bmw-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={bmwFont.variable}>
      <body style={{ display: 'grid', gridTemplateRows: '1fr auto', minHeight: '100vh', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
