// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import clsx from "clsx";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

const myFont = localFont({
  src: "../../public/fonts/Yanone_Kaffeesatz/YanoneKaffeesatz-VariableFont_wght.ttf",
  variable: "--my-font",
});

export const metadata = {
  title: "JBS Interior",
  description: "Transforming Spaces into Art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(myFont.className, "antialiased ") }>
      {/* <body className={clsx(urbanist.className) }> */}
        {children}
      </body>
    </html>
  );
}
