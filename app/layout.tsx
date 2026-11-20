import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: `${site.name} | Research & Creative Portfolio`, template: `%s | ${site.name}` },
  description: site.description,
  metadataBase: new URL("https://abbyhoky.github.io"),
  openGraph: { title: site.name, description: site.description, type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider><Header/><main id="main-content">{children}</main><Footer/></ThemeProvider></body></html>;
}
