import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Noto_Sans, Special_Gothic_Expanded_One } from "next/font/google";

export const metadata: Metadata = {
  title: "Francesco's Portfolio",
  description: "Francesco's Portfolio website, showcasing projects, game jams and skills.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const noto = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const gothicExpanded = Special_Gothic_Expanded_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gothic-expanded",
  fallback: ["sans"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${noto.variable} ${gothicExpanded.variable}`} suppressHydrationWarning>
      <body id="home">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
