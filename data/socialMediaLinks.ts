import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const socialMediaLinks = [
  {
    id: 1,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/thiagocorrea20/",
    icon: faLinkedin,
  },
  {
    id: 2,
    name: "Github",
    href: "https://github.com/ThiagoBRG60",
    icon: faGithub,
  },
  {
    id: 3,
    name: "Whatsapp",
    href: "https://api.whatsapp.com/send/?phone=5547999762389&text&type=phone_number&app_absent=0",
    icon: faWhatsapp,
  },
] as const;

export {socialMediaLinks}