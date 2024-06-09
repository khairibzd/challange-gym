import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, roboto } from "@/config/fonts";
import { Navbarr } from "@/components/navbarr";
import SmoothScrolling from "@/components/SmoothScrolling";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import { TogglerProvider } from "@/components/context/toggler";
import AboutSidebar from "@/components/aboutSideBar";
import NFooter from "@/components/NewFooter";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo-gym-removebg-preview.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TogglerProvider>
      <html lang="en" className="scroll-smooth">
        <head>
          <script
            src="https://kit.fontawesome.com/23cc326a28.js"
            crossOrigin="anonymous"
          ></script>
        </head>
        <head />
        <body className={roboto.className}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            {/* <div className="relative flex flex-col min-h-screen  "> */}
            {/* <AppBgImg /> */}
            <div className="fixed z-10 w-full">
              <Navbarr />
            </div>
              <AboutSidebar />
            <main>{children}</main>

            {/* <footer className="w-full flex items-center justify-center py-3"> */}
            {/* <Footer /> */}
            <NFooter/>
            {/* </footer> */}
            {/* </div> */}
          </Providers>
        </body>
      </html>
    </TogglerProvider>
  );
}
