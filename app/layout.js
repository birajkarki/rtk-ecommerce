import { Inter } from "next/font/google";
import "./globals.css";

import { AuthProvider, useAuth } from "@/context/AuthContext";
import HeaderEcommerce from "@/components/header/HeaderEcommerce/HeaderEcommerce";
import { Providers } from "@/redux/providers";
// import HeaderMain from "@/components/header/HeaderMain/HeaderMain";

export const metadata = {
  title: "Hajir's Next.js App",
  description: "A smart attadance system ",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // const { isAuthenticated } = useAuth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            {/* {isAuthenticated ? <HeaderEcommerce /> : <HeaderMain />} */}
            <HeaderEcommerce />
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
