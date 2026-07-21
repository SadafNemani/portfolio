import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import path from "path";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

export const anjoman = localFont({
  src: [
    {
      path: "../../public/fonts/Anjoman/Anjoman-Light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Anjoman/Anjoman-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Anjoman/Anjoman-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-anjoman",
});
