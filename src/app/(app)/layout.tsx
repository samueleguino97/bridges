import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Hero from "@/sections/hero";
import Team from "@/sections/team";
import Feature from "@/sections/feature";
import Footer from "@/sections/footer";
import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave";
import { getPayload } from "payload";
import config from "@payload-config";

export const dynamic = "force-dynamic";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bridges",
  description: "Aprendiendo ingles de la manera correcta",
};
const payload = await getPayload({ config });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const landing = await payload.findByID({
    collection: "pages",
    id: "1",
    draft: true,
  });
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/globe.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RefreshRouteOnSave />
        <Hero data={landing} />
        <Feature data={landing} />
        <Team data={landing} />
        <Footer data={landing} />

        {children}
      </body>
    </html>
  );
}
