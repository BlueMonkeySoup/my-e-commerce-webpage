import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import StoreProvider from "@/providers/StoreProvider";
import Header from "./components/Header";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-shop!",
  description: "hello world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <StoreProvider>
            <div className="">
              <Header />
              <Navbar />

              {children}

              <ScrollToTop />
              <Footer />
            </div>
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
