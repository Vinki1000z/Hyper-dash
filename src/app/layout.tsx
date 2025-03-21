"use client"
import { useEffect } from "react";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration
      once: true, // Animates only once
    });
  }, []);

  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
