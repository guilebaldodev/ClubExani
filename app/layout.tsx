import type { Metadata } from "next";
import "./globals.css";
import 'react-quill-new/dist/quill.snow.css';
import { sourceSans } from "./fonts";
import { ClerkProvider } from "@clerk/nextjs";
import { esMX } from "@clerk/localizations";
import InitUser from "./ui/InitUser";



export const metadata: Metadata = {
  title: "Simulandum",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider localization={esMX}>
    <html lang="es">
      <body className={`${sourceSans.className}`}>
        <InitUser></InitUser>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
