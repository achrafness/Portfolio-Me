import "../styles/globals.css";
import Footer from "@/layout/Footer";
 

export const metadata = {
  title: "Achraf Abdelouadoud Nessighaoui",
  description: "Portfolio of Achraf Nessighaoui — web pentester, CTF player and offensive security enthusiast, cybersecurity engineering student at ESTIN Béjaïa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
