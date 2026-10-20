import "../styles/globals.css";
import localFont from "next/font/local";
import Footer from "@/layout/Footer";

// Self-hosted, preloaded WOFF2 with font-display: swap (text shows right away)
const powerGrotesk = localFont({
  src: "../public/fonts/PowerGrotesk-Regular.woff2",
  variable: "--font-power-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Achraf Abdelouadoud Nessighaoui",
  description: "Portfolio of Achraf Nessighaoui — web pentester, CTF player and offensive security enthusiast, cybersecurity engineering student at ESTIN Béjaïa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={powerGrotesk.variable}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
