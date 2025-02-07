import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import ModeToggle from "./_components/ModeToggle";
import ColorPickerModal from "./_components/ColorPickerModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chad Kouse",
  description: "My blog or whatever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{fontSize: "16px"}} lang="en" suppressHydrationWarning={true}>
      <head>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.toggle("dark", localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches));' }} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: 'localStorage.getItem("link-color-expires") && localStorage.getItem("link-color-expires") > Date.now() && document.documentElement.style.setProperty("--link", `#${localStorage.getItem("link-color")}FF`);'}} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: 'localStorage.getItem("link-color-expires") && localStorage.getItem("link-color-expires") > Date.now() && document.documentElement.style.setProperty("--link-hover", `#${localStorage.getItem("link-color")}AA`);'}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="absolute top-0 right-0 mt-2 mr-2 flex flex-col">
            <ModeToggle />
            <ColorPickerModal />
          </div>
        <div className="flex flex-col w-screen min-h-screen">
          <div className="flex flex-col md:flex-row flex-grow items-stretch">
            <Header></Header>
            <main className="bg-background-alt md:ml-[20rem] w-full">
              <div className="my-10 px-4">
                {children}
              </div>
            </main>
          </div>
          <div className="z-10 flex justify-center align-center">
            <Footer/>
          </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
