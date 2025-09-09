import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angel Kellogg",
  description: "Luxury + street energy — official site.",
  metadataBase: new URL("https://www.angelkellogg.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">{children}</body>
    </html>
  );
}
