const FormInput = ({element, type, name, onChange, value, nomeInput}: IFormInputProps) => {
  if (element === 'textarea') {
   return (
      <div className="relative flex flex-col group">
         <textarea onChange={onChange} value={value} className="contactInput py-[15px] resize-none" name={name} id={name} rows={8} required></textarea>
         <label className={`${value !== '' ? '-top-[15px] left-[15px] p-1 text-sm text-highlight' : 'top-[12px] text-textSecondary'} contactLabel`}
            htmlFor={name}>{nomeInput}
         </label>
      </div>
   )
  }

  return (
   <div className="relative flex flex-col group">
      <input onChange={onChange} value={value} className="contactInput" type={type} name={name} id={name} autoComplete={name} required/>
      <label className={`${value !== '' ? '-top-[15px] left-[15px] p-1 text-sm text-highlight' : 'top-[7px] text-textSecondary xl:top-[12px]'} contactLabel`} 
         htmlFor={name}>{nomeInput}
      </label>
   </div>
  )
}

export default FormInput