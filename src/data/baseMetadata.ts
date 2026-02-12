import { Metadata } from "next"

const baseMetadata: Metadata = {
   title: "Thiago Correa - Portfólio",
   description: "Desenvolvedor Fullstack especializado em React, Next.js, TypeScript e Node.js. Crio aplicações web modernas, performáticas e com foco em experiência do usuário.",
   keywords: [
      "Desenvolvedor Fullstack", "React", "Next.js", "Typescript",
      "JavaScript", "Node.js", "Tailwind CSS", "HTML",
      "CSS", "Git", "UX/UI", "Web Design", "Aplicações Web",
      "Portfolio Desenvolvedor", "Desenvolvimento Web", "Thiago Correa",
      "Developer Brasil", "Design Responsivo"
   ],
   authors: [{name: "Thiago Correa"}],
   creator: "Thiago Correa",
   publisher: "Thiago Correa",
   formatDetection: {
      email: false,
      address: false,
      telephone: false,
   },
   metadataBase: new URL("https://thiagocorrea.vercel.app"),
   alternates: {
      canonical: "/"
   },
   openGraph: {
      type: "website",
      locale: "pt_BR",
      title: "Thiago Correa - Portfólio",
      description: "Desenvolvedor Fullstack especializado em React, Next.js, TypeScript e Node.js. Crio aplicações web modernas, performáticas e com foco em experiência do usuário.",
      siteName: "Thiago Correa Portfolio",
      images: [
         {
            url: "/og-image.png",
            width: 1200,
            height: 630,
            alt: "Thiago Correa - Portfólio"
         }
      ]
   },
   twitter: {
      card: "summary_large_image",
      title: "Thiago Correa - Portfólio",
      description: "Desenvolvedor Fullstack especializado em React, Next.js, TypeScript e Node.js. Crio aplicações web modernas, performáticas e com foco em experiência do usuário.",
      images: ["/og-image.png"]
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-video-preview": -1,
         "max-image-preview": "large",
         "max-snippet": -1
      }
   },
   icons: {
      icon: [
         {url: "/favicon.ico"},
         {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"},
         {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
      ],
      apple: [
         {url: "/apple-touch-icon.png"}
      ]
   },
   manifest: "/site.webmanifest"
}

export { baseMetadata }