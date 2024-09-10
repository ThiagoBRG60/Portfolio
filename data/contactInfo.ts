import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const contactInfo = {
   whatsapp: {
      name: 'Whatsapp',
      info: '+55 47 99976-2389',
      icon: faWhatsapp,
      href: 'https://api.whatsapp.com/send/?phone=5547999762389&text&type=phone_number&app_absent=0'
   },
   email: {
      name: 'Email',
      info: 'thiagocorreadev@gmail.com',
      icon: faEnvelope,
      href: 'mailto:thiagocorreadev@gmail.com'
   }
} as const

export {contactInfo}