import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { RainbowProvider } from "@/providers/WalletProvider";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dogix - BNB Token Creator",
  description: "Create your token in instant",
  icons: {
    icon: "/new logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center"  visibleToasts={1}/>
        <RainbowProvider>
          <Header/>
          {children}
        </RainbowProvider>
      </body>
    </html>
  );
}
