import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'tailwindcss/tailwind.css';
import NavigationBar from "./components/navigationBar";
import { AppWrapper } from "./context";
import ProgressBar from "./components/progressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planify junior challenge",
  description: "make reservations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen justify-between items-center w-screen`}>
        <AppWrapper>
        <ProgressBar/>
        <div className="flex-grow">{children}</div>
        <NavigationBar />
        </AppWrapper>
        </body>
    </html>
  );
}
