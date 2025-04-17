import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Storyblock Demo",
  description: "Blog Demo using Storyblok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'max-w-[1600px] py-12 m-auto h-screen'}
      >
        {children}
      </body>
    </html>
  );
}
