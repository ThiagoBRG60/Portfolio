import { faCheckCircle, faXmarkCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FormStatusMessage = ({status, messageSent}: IFormStatusProps) => {
  return (
    <div className={`${messageSent ? '' : '-translate-y-[200%]'} fixed flex justify-center px-1 top-20 w-[90%] h-[80px] bg-background border-2 border-highlight rounded-[10px] transition duration-700 xs:h-[70px] md:top-32 md:w-[65%] xl:w-[35%] xl:top-24 2xl:top-36 2xl:w-[30%]`}>
      <p className="flex flex-col text-center justify-center text-sm gap-[5px] font-semibold text-textPrimary xs:flex-row xs:items-center">
        {status === 'success' ? 
          'Mensagem enviada com sucesso!' :
          'Erro ao enviar a mensagem, tente novamente.'
        }
        <FontAwesomeIcon 
          className={`${status === 'success' ? 'text-green-400' : 'text-red-400'} w-4 text-lg`}
          icon={status === 'success' ? faCheckCircle : faXmarkCircle}/>
      </p>
    </div>
  )
}

export default FormStatusMessage