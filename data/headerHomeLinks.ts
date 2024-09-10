const headerHomeLinks = [
  {
    id: 1,
    name: "Sobre Mim",
    href: "#sobre",
  },
  {
    id: 2,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 3,
    name: "Projetos",
    href: "#projetos",
  },
  {
    id: 4,
    name: "Contato",
    href: "#contato",
  },
] as const;

const headerLeaveLink = [
   {
      id: 1,
      name: "Voltar",
      href: "/",
   }
] as const;

export {headerHomeLinks, headerLeaveLink}