import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const APP_NAME = 'template_mongodb_web-push'
const APP_DEFAULT_TITLE = APP_NAME;
const APP_TITLE_TEMPLATE = "%s - " + APP_NAME;
const APP_DESCRIPTION = 'template for web applications with push messages and mongodb'

export const metadata: Metadata = {

  applicationName: APP_NAME,
  title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  // appleWebApp: {
  //     capable: true,
  //     statusBarStyle: "default",
  //     title: APP_DEFAULT_TITLE,
  //     // startUpImage: [],
  // },
  appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
      telephone: false,
  },
  // openGraph: {
  //     type: "website",
  //     siteName: APP_NAME,
  //     title: {
  //         default: APP_DEFAULT_TITLE,
  //         template: APP_TITLE_TEMPLATE,
  //     },
  //     description: APP_DESCRIPTION,
  // },
  // twitter: {
  //     card: "summary",
  //     title: {
  //         default: APP_DEFAULT_TITLE,
  //         template: APP_TITLE_TEMPLATE,
  //     },
  //     description: APP_DESCRIPTION,
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
