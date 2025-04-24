import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Far Edge Collection",
  description:
    "List your things that need to be done before you go to the far edge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${montserratFont.variable} antialiased min-h-full`}>
        {children}
      </body>
    </html>
  );
}
