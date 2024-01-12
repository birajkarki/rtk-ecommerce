"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/storeProvider";

import { AuthProvider, useAuth } from "@/context/AuthContext";
import HeaderEcommerce from "@/components/header/HeaderEcommerce/HeaderEcommerce";
import HeaderMain from "@/components/header/HeaderMain/HeaderMain";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { isAuthenticated } = useAuth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            {isAuthenticated ? <HeaderEcommerce /> : <HeaderMain />}
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
