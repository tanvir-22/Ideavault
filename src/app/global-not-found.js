// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="flex flex-col justify-center h-screen items-center">
          <h1 className="text-4xl">404 - Page Not Found</h1>
          <p className="text-2xl mt-1">This page does not exist.</p>
          <a className="btn btn-primary mt-2" href={`/`}>Go To Home </a>
        </div>
      </body>
    </html>
  );
}
