const projectCardDetails = {
  freelancer: [
    {
      id: 1,
      name: "Ummilhaodepix",
      image: "/projects/ummilhaodepix.avif",
      category: "Website",
      techs: [
        "/icons/html-icon.svg",
        "/icons/css-icon.svg",
        "/icons/javascript-icon.svg",
      ],
      alt: ["Ícone do HTML", "Ícone do CSS", "Ícone do JavaScript"],
      preview: "https://ummilhaodepix.com.br/",
    },
  ],
  personal: [
    {
      id: 1,
      name: "SpeakNotes",
      image: "/projects/speaknotes.avif",
      category: "Website",
      techs: [
        "/icons/react-icon.svg",
        "/icons/javascript-icon.svg",
        "/icons/css-icon.svg",
      ],
      alt: ["Ícone do CSS", "Ícone do JavaScript", "Ícone do React"],
      preview: "https://main--speaknotes.netlify.app/",
      github: "https://github.com/ThiagoBRG60/SpeakNotes",
    },
    {
      id: 2,
      name: "Algorithms Analysis",
      image: "/projects/algorithms-analysis.avif",
      category: "Website",
      techs: [
        "/icons/react-icon.svg",
        "/icons/javascript-icon.svg",
        "/icons/styled-components-icon.avif",
      ],
      alt: [
        "Ícone do React",
        "Ícone do JavaScript",
        "Ícone do Styled Components",
      ],
      preview: "https://main--algorithms-analysis.netlify.app/",
      github: "https://github.com/ThiagoBRG60/Algorithms-Analysis",
    },
  ],
} as const;

export {projectCardDetails}