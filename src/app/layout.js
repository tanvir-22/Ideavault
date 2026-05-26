import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "IdeaVault",
  description: "Startup Idea Sharing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
