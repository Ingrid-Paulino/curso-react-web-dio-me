import React, { Fragment } from 'react';


function App() {
  return (
    // O react tem que estar sempre emcapsulado em uma unica tag, nesse caso é a div
    // Retornar esse monte de div, acaba com a arvoreDom e por isso foi criado o Fragment
    // <div>
    //   <div>
    //     ReactJS
    //   </div>
    //   <div>
    //     ReactJS Avançado
    //   </div>
    // </div>

    //Dessa forma a arvore DOM fica muito mais organizada, sem aparecer Nós desnecessario
    //O fragment não aparece na arvore
    <Fragment>
      <div>
        ReactJS
      </div>
      <div>
        ReactJS Avançado
      </div>
    </Fragment>
    
    //poderia usar o fragma assim tbm <></>
  )
}

export default App;