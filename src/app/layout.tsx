import "@/styles/globals.scss";
import type { Metadata } from "next";
import { MainFont } from "@/lib/font";

export const metadata: Metadata = {
  title: "Mountain NFT Collectibles",
  description: "Mountain NFT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={MainFont.className}>
      <body className={"container"}>{children}</body>
    </html>
  );
}
