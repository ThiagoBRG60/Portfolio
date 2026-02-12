import { FormInputs } from "@/data/contactFormFields";
import { RegisterOptions } from "react-hook-form";

type ValidationsType = Record<string, (value?: any) => boolean>

function validateContactPayload(payload: string, rules: RegisterOptions<FormInputs>) {
   const result: boolean[] = []

   const validations: ValidationsType = {
      required: () => payload !== "",
      pattern: (regex: RegExp) => regex.test(payload),
      minLength: (value: number) => payload.length >= value,
      maxLength: (value: number) => payload.length <= value
   }

   if (payload && rules) {
      const entries = Object.entries(rules)

      for (const [ruleKey, ruleValue] of entries) {
         const validation = validations[ruleKey]
         const isValid = ruleValue.value ? validation(ruleValue.value) : validation()

         result.push(isValid)
      }
   }

   return result.every(item => item === true)
}

export { validateContactPayload }