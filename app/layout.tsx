import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbarr } from "@/components/navbarr";
import SmoothScrolling from "@/components/SmoothScrolling";

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
    <html suppressHydrationWarning lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/23cc326a28.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <head />
      <body
        className={clsx(
          " bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {/* <div className="relative flex flex-col min-h-screen  "> */}
          {/* <AppBgImg /> */}
          <div className="fixed z-10 w-full">
            <Navbarr />
          </div>

          <main>
            <SmoothScrolling>{children}</SmoothScrolling>
          </main>

          {/* <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              ></Link>
            </footer> */}
          {/* </div> */}
        </Providers>
      </body>
    </html>
  );
}
