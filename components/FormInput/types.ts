interface IFormInputProps {
   element?: 'input' | 'textarea'
   type?: string
   name: string
   onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
   value: string
   nomeInput: string
}