import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({ subsets: ["latin"], weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"]});

export const metadata: Metadata = {
  title: "Bytetelecoms",
  description:
    "BYTELECOMS makes it easier than ever to buy data, recharge airtime, pay your electricity bills, and purchase educational pins—all from one platform. Stay connected and powered up with just a few clicks!",
  openGraph: {
    title: "Bytetelecoms - Easy Payments for Everything",
    description:
      "Buy data, recharge airtime, pay electricity bills, and purchase educational pins seamlessly!",
    url: "https://bytetelecoms.com",
    type: "website",
    images: [
      {
        url: "https://bytetelecoms.com/og.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Bytetelecoms - Easy Payments",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={prompt.className}>{children}</body>
    </html>
  );
}
