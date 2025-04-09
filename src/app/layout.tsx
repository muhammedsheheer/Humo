import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import {
  Open_Sans,
  Lora,
  Inter,
  Pathway_Gothic_One,
  Passion_One,
} from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Humo",
  description: "Humo",
  icons: [{ rel: "icon", url: "/images/home/hero/logo.png", sizes: "11x11" }],
};

// const birthstone = Birthstone({
//   subsets: ["latin"],
//   variable: "--font-birthstone",
//   weight: ["400"],
// });

// const sofia_sans = Sofia_Sans_Extra_Condensed({
//   subsets: ["latin"],
//   variable: "--font-sofia_sans",
//   weight: ["400"],
// });

const passion_one = Passion_One({
  subsets: ["latin"],
  variable: "--font-passion_one",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["400", "500", "600", "700", "800"],
});

const pathway = Pathway_Gothic_One({
  subsets: ["latin"],
  variable: "--font-pathway",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-inter antialiased",
          passion_one.variable,
          open_sans.variable,
          inter.variable,
          lora.variable,
          pathway.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
