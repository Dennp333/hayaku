import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hayaku - Japanese Conjugation Drill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
