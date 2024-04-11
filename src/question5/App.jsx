// Återanvändbara komponenter 3p
// 1. Skapa en komponent Button som tar en color och en title som props
// Använd den 2 gånger med olika title och color.

// 2. Skapa en komponent ButtonWithChildren som änvänder children istället
// för en title prop. Använd den 2 gånger med olika title och color.

// 3. Skapa en komponent Article som tar en title och en text som props
// Använd komponenten 2 gånger med olika title och text.

import Article from './Article'
import Button from './Button'
import ButtonWithChildren from './ButtonWithChildren'
import React from 'react'
function App() {
  return (
    <div>
      <Button title='Hi' color='blue'/>
    </div>
  )
}

export default App
