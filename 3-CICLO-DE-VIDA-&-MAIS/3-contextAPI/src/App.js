import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './Theme'; // para utilizar o contexto eu preciso prover ele
import Card from './Card';

function App() {
  const [token, setToken] = useState()

  useEffect(() => {
    setTimeout(() => {
      setToken('jjyhfyu7y809-0-0kjj898')
    }, 4000)
  }, [setToken])

  return (
    //Aqui passei os valores para o provider.
    //E o provider que vai providenciar os valores para os componentes filhos
    // ...theme.primary sig que estou passando todos os valores de theme
     <ThemeContext.Provider value={ { ...themes.primary, token } }> {/* provi o themeContext */}
       <Card /> {/* estou provendo o Card */}
    </ThemeContext.Provider>
  )
}

export default App;