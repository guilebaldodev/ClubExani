import type { Metadata } from "next";
import "./globals.css";
import 'react-quill-new/dist/quill.snow.css';
import { poppins } from "./fonts";
import { ClerkProvider } from "@clerk/nextjs";
import { esMX } from "@clerk/localizations";
import InitUser from "./ui/InitUser";
import { ToastContainer } from "react-toastify";



export const metadata: Metadata = {
  title: "Simulandum",
  description:
    "Simuladores de examen para EXANI-III, EGEL, ACREDITA-BACH y más. Preguntas alineadas al temario, práctica ilimitada y resultados inmediatos. ¡Prepárate mejor con Simulandum!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider localization={esMX}>
    <html lang="es">
      <body className={`${poppins.className}`}>
        <InitUser></InitUser>
        {children}
      </body>
    </html>
    <ToastContainer position="bottom-right" autoClose={3000} />

    </ClerkProvider>
  );
}
