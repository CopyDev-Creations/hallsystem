import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header, LoadingScreen, SmoothScrolling } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HALLSYSTEM - budowa hal produkcyjnych, magazynowych oraz dla rolnictwa",
  description: "Hallsystem w Starachowicach woj. świętokrzyskie zajmuje się budową hal produkcyjnych, magazynowych oraz rolniczych. Swoje usługi realizujemy na terenie całego kraju.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className} style={{ backgroundImage: `url("${process.env.basePath || ""}/icons/grid.svg")` }}>
        <SmoothScrolling>
          <LoadingScreen>
            <Header />
            {children}
            <Footer />
          </LoadingScreen>
        </SmoothScrolling>
      </body>
    </html>
  );
}
