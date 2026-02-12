import { ContactEmailTemplateProps } from "./types"

const ContactEmailTemplate = ({name, email, message}: ContactEmailTemplateProps) => {
   const currentDate = new Date()
   const date = currentDate.toLocaleDateString("pt-BR", {dateStyle: "long"})
   const time = currentDate.toLocaleTimeString("pt-BR", {timeStyle: "short"})

	return (
      <html lang="pt-BR">
         <head>
            <meta charSet="UTF-8"/>
         </head>
         <body style={{fontFamily: "Google Sans, Arial, sans-serif", padding: "15px", margin: 0, color: "#FFFFFFD9", backgroundColor: "#010617"}}>
            <div style={{width: "100%", maxWidth: "450px", margin: "0 auto", borderRadius: "5px", borderWidth: "1px", borderStyle: "solid", borderColor: "#6f32f37f", overflow: "hidden"}}>
               <div style={{padding: "15px 0", textAlign: "center", background: "linear-gradient(to right, #6F32F3 0%, #220F4A 100%)", backgroundColor: "#6F32F3"}}>
                  <h1 style={{fontSize: "20px", margin: "5px 0", fontWeight: 600}}>
                     Nova Mensagem
                  </h1>
               </div>

               <div style={{padding: "15px", background: "linear-gradient(to bottom, #0E0C3C 0%, #090826 100%)", backgroundColor: "#0E0C3C"}}>
                  <div>
                     <h3 style={{margin: "5px 0",fontWeight: 600, fontSize: "12px", color: "#6F32F3"}}>
                        NOME
                     </h3>
                     <p style={{margin: "0", wordBreak: "break-word", fontWeight: 600, fontSize: "14px"}}>
                        {name}
                     </p>
                  </div>

                  <div style={{width: "100%", height: "1px", margin: "10px 0", backgroundColor: "#6F32F340"}}/>

                  <div>
                     <h3 style={{margin: "15px 0 5px", fontWeight: 600, fontSize: "12px", color: "#6F32F3"}}>
                        EMAIL
                     </h3>
                     <a style={{margin: "0", textDecoration: "none", color: "#FFFFFFD9", wordBreak: "break-word", fontWeight: 600, fontSize: "14px"}}>
                        {email}
                     </a>
                  </div>

                  <div style={{width: "100%", height: "1px", margin: "10px 0", backgroundColor: "#6F32F340"}}/>

                  <div>
                     <h3 style={{margin: "15px 0 5px", fontWeight: 600, fontSize: "12px", color: "#6F32F3"}}>
                        MENSAGEM
                     </h3>
                     <div style={{padding: "10px", marginTop: "5px", borderRadius: "5px", borderWidth: "1px", borderStyle: "solid", borderColor: "#6f32f340", backgroundColor: "#6F32F31A"}}>
                        <p style={{wordBreak: "break-word", whiteSpace: "pre-wrap", fontWeight: 600, fontSize: "13px"}}>
                           {message}
                        </p>
                     </div>
                  </div>

                  <a href={`mailto:${email}`} style={{display: "block", padding: "10px 0", margin: "15px 0 5px", fontWeight: 600, fontSize: "14px", textAlign: "center", color: "#FFFFFFD9", textDecoration: "none", borderRadius: "5px", background: "linear-gradient(to right, #6F32F3 0%, #220F4A 100%)", backgroundColor: "#6F32F3"}}>
                     Responder
                  </a>
               </div>

               <div style={{padding: "15px 0", textAlign: "center", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#6F32F340", background: "linear-gradient(to bottom, #090826 0%, #0E0C3C 100%)", backgroundColor: "#090826"}}>
                  <p style={{fontWeight: 600, margin: "0 0 5px", fontSize: "12px", color: "#6F32F3"}}>
                     Enviado pelo formulário de contato do portfólio
                  </p>
                  <p style={{wordBreak: "break-word", margin: "0", fontSize: "11px"}}>
                     {date} às {time}
                  </p>
               </div>
            </div>
         </body>
      </html>
   )
}

export default ContactEmailTemplate