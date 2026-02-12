function highlightParser(textArr: readonly string[]) {
   const copy = [...textArr]
   const newTextArr = []

   let sliceStart = 0
   let sliceEnd = 0
   let insideHighlight = false

   for (let i = 0; i < copy.length; i++) {
      let currentText = copy[i]
      
      if (currentText) {
         const parsedText = []
         const currentTextEnd = currentText.length - 1
         const hasHighlight = () => /[{}]/g.test(currentText as string)

         while(hasHighlight()) {
            const match = currentText.match(!insideHighlight ? "{" : "}")

            if (match && match.index !== undefined) {
               sliceEnd = match.index

               const slicedText = currentText.slice(sliceStart, sliceEnd)

               parsedText.push(insideHighlight ? <span key={sliceStart} className="font-semibold text-highlight-text">{slicedText}</span> : slicedText)
               currentText = currentText.replace(!insideHighlight ? "{" : "}", " ")
               insideHighlight = !insideHighlight
               sliceStart = sliceEnd + 1
            }
         }

         if (sliceEnd !== currentTextEnd) {
            parsedText.push(currentText.slice(sliceStart))
         }

         newTextArr.push(parsedText)
         sliceStart = 0
         sliceEnd = 0
         insideHighlight = false
      }
   }

   return newTextArr
}

export { highlightParser }