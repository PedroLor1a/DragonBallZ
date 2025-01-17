import { Inter } from "next/font/google";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
});

export const metadata = {
  title: "Dragon Ball Web",
  description: "Generated by create next app",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${exo2.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
