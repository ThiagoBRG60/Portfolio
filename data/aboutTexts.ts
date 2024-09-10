interface ITextPart {
  text: string;
  highlight?: boolean;
}

interface IAboutTexts {
  id: number;
  content: ITextPart[];
}

const aboutTexts: IAboutTexts[] = [
  {
    id: 1,
    content: [
      { text: "Desde cedo, a tecnologia sempre fez parte da minha vida e despertou meu interesse. Em 2023 iniciei minha jornada nos estudos de desenvolvimento Front-End, e atualmente possuo conhecimentos de " },
      { text: "React,", highlight: true },
      { text: " Styled Components,", highlight: true },
      { text: " Redux,", highlight: true },
      { text: " Zustand,", highlight: true },
      { text: " JavaScript,", highlight: true },
      { text: " Consumo de APIs,", highlight: true },
      { text: " HTML,", highlight: true },
      { text: " CSS,", highlight: true },
      { text: " Sass,", highlight: true },
      { text: " Git", highlight: true },
      { text: " e algumas noções de " },
      { text: "UX/UI.", highlight: true },
      { text: " Atualmente estou buscando melhorar meu conhecimento em " },
      { text: "TypeScript.", highlight: true },
    ],
  },
  {
    id: 2,
    content: [
      { text: "Sou uma pessoa determinada e esforçada. Quando as coisas se complicam, faço uma pausa, reavalio e persisto até alcançar meus objetivos. Além das habilidades técnicas, valorizo profundamente minhas " },
      { text: "soft skills, ", highlight: true },
      { text: "como comunicação eficaz, paciência e trabalho em equipe." },
    ],
  },
  {
    id: 3,
    content: [
      { text: "Tenho uma paixão especial por criar sites que não apenas sejam bonitos esteticamente, mas também funcionais e intuitivos. Acredito que a combinação entre design e usabilidade pode proporcionar experiências digitais memoráveis." },
    ],
  },
] as const;

export { aboutTexts };