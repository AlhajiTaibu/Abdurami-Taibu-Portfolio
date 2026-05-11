import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Abdurami Taibu - Software Engineer",
  description:
    "Experienced software engineer with 5+ years building scalable web applications and full-stack solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased text-foreground"
        style={{
          background: "linear-gradient(135deg, #f3e7ff 0%, #ffe7f0 100%)",
        }}
      >
        <div
          className="dark"
          style={{
            background: "linear-gradient(135deg, #1f1a3d 0%, #2a1d3a 100%)",
          }}
        >
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            {process.env.NODE_ENV === "production" && <Analytics />}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
