import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thiago Correa - Portfólio",
  description: `Desenvolvedor Front-End especializado em 
  diversas tecnologias. Crio aplicações web visualmente atraentes 
  e funcionais, focando na experiência do usuário.`,
  keywords: [
    "Desenvolvedor Front-End", "React", "JavaScript", "HTML",
    "CSS", "Styled Components", "Redux", "Zustand", "Sass",
    "Git", "UX/UI", "Web Design", "Aplicações Web", "Portfólio de Desenvolvimento",
    "Experiência do Usuário", "Desenvolvimento Web", "Programação Front-End",
    "Tecnologias Web","Design Responsivo", "Thiago Correa"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
