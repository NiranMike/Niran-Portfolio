import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "../components/navbar";
import Logo from "@/components/Logo/Logo";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Olaniran's Portfolio",
  },
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Logo />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
