import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { PageTransition } from "@/components/ui/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mauryvanshi Prateek — AI / ML Engineer | Data & GenAI",
    template: "%s | Mauryvanshi Prateek",
  },
  description:
    "Mauryvanshi Prateek is a B.Tech Artificial Intelligence student building practical systems across machine learning, deep learning, GenAI, data and software engineering.",
  metadataBase: new URL("https://mauryvanshiprateek.dev"),
  keywords: [
    "Mauryvanshi Prateek",
    "AI Engineer",
    "Machine Learning",
    "GenAI",
    "Data Science",
    "Software Engineer",
    "JalRakshak",
    "StockPilot AI",
    "CSVTU",
  ],
  authors: [{ name: "Mauryvanshi Prateek" }],
  creator: "Mauryvanshi Prateek",
  openGraph: {
    title: "Mauryvanshi Prateek — AI / ML Engineer | Data & GenAI",
    description:
      "Mauryvanshi Prateek is a B.Tech Artificial Intelligence student building practical systems across machine learning, deep learning, GenAI, data and software engineering.",
    type: "website",
    locale: "en_US",
    siteName: "Mauryvanshi Prateek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauryvanshi Prateek — AI / ML Engineer | Data & GenAI",
    description:
      "B.Tech AI student building practical systems across ML, deep learning, GenAI, and software engineering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-text antialiased selection:bg-accent selection:text-white">
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <LoadingScreen />
            <CommandPalette />
            <Navbar />
            <div className="flex-1 flex flex-col pt-[72px]">
              <PageTransition>
                {children}
              </PageTransition>
            </div>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
