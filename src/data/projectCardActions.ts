const projectCardActions = [
   {
      label: "Repositório",
      icon: "github",
      isDynamicHref: true,
      href: "repoUrl"
   },
   {
      label: "Demo",
      icon: "arrow-up-right-from-square",
      isDynamicHref: true,
      href: "demoUrl"
   },
   {
      label: "Detalhes",
      icon: "arrow-right",
      isDynamicHref: false,
      href: "/projects"
   }
] as const

export { projectCardActions }