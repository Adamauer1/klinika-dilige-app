import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  createTheme,
  MantineProvider,
} from "@mantine/core";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import CookiesModule from "@/components/ui/CookiesModule";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Klinika Dilige",
  description:
    "Klinika Dilige, Profesjonalne centrum medyczne w Szczecinie. Psychiatra, psycholog, psychoterapeuta, seksuolog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl-PL">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={poppins.className}>
        <MantineProvider>
          <AppShell
            // layout="alt"
            withBorder={false}
            header={{ height: { base: 60, md: 80, lg: 80, xl: 80 } }}
            // footer={{ height: 400 }}
          >
            <Notifications />
            <CookiesModule />
            <AppShellHeader>
              <Header />
            </AppShellHeader>
            <AppShellMain style={{}}>{children}</AppShellMain>
            <AppShellFooter style={{ position: "relative" }}>
              <Footer />
            </AppShellFooter>
          </AppShell>
        </MantineProvider>
      </body>
      <GoogleAnalytics gaId={process.env.GID || ""} />
    </html>
  );
}
