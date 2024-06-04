import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memo Game",
  description: "Memo Game Application",
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: '#f8f8f8',
  keywords: ['game', 'memo'],
  appleWebApp: {
    title: "Memo Game",
    capable: true,
    statusBarStyle: 'default',
  },
  other: {
    "msapplication-TileColor": "#f8f8f8",
    "msapplication-TileImage": "/logo.png",
    "theme-color": "#f8f8f8",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Memo Game",
    "google": "notranslate",
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
