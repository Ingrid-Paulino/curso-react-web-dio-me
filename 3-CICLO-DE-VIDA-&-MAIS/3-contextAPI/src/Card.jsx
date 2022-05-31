import React, { useContext } from 'react';
import { ThemeContext } from './Theme';
import Form from './Form';

// Vou consumir para o card, os valores de Theme com o useContext


//obs: Se eu fosse utivizar componente de classe, ao inves de usar o useContext, eu teria que usar o consumer.

function Card() {
  const theme = useContext(ThemeContext)
  console.log('theme:value', theme)
  return(
    <div>
      <Form />
      <button
        style={{ background: theme.background, color: theme.color }}
      >
        Card button
      </button>
    </div>
  )
}

export default Card;