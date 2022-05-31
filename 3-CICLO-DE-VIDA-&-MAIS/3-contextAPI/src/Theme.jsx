//esse ´e o contexto onde vai ser criado a base inicial
//essa é a base inicial pra poder usar em qualquer parte da aplicação.

//essse contexto que sera consumido
//posso ter varios contextos
import { createContext } from 'react'; // criei o contexto

export const themes = {
  primary: {
    background: '#000',
    color: '#efefef',
  },
  secondary: {
    background: '##efefef',
    color: '#000',
  },
}


export const ThemeContext = createContext(themes.secondary)