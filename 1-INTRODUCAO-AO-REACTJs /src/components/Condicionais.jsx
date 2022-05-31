import React, { Component } from 'react'

export default class Condicionais extends Component {
  render() {
    // Variaveis de elementos
    //forma 1 e 2
    const buttonA = <button>historico do cliente</button>
    const buttonB = <button>Cadastrar Cliente</button>
    const hasCustomer = true

    //forma 2
    const renderShowHistory = (
      <div>
        Clique no botão {buttonA}
      </div>
    )

    const renderAddCustomer = (
      <div>
        Clique no botão {buttonB}
      </div>
    )

    //forma 3 
    const customer = "Ingrid Paulino";
    const showCustomer = () => {
      //se cair no if sera null, e null no react não renderiza o aquele elemento ou bloco. Evitando que o componente seja renderizado.

      //nn é boa pratica ter mais de um return dentro de um mesmo escopo
      if(!hasCustomer) return null
      return (
        <div>
          <h1>Nome do cliente: {customer}</h1>
        </div>
      )
    }

    return (
      <div>
        {/* forma 1 de condicional - if inline com operador lógico && */}
        {
          // Se hasCustomer for true o botão aparecera, se for false, o botão não aparecera
          hasCustomer && (
            <div>
              click no botao abaixo paravisualizar o historico do cliente {buttonA}
            </div>
          ) 
        }

        {/* forma 2 de condicional - ternario */}
        {
          // Formato 1 -> não recomendado, pois a logica fica muito grande. Vamos separar em bloquinhos para o codigo ficar mais organizado.

          // hasCustomer ? (
          //   <div>
          //     Clique no botão {buttonA}
          //   </div>
          // ) : (
          //   <div>
          //     Clique no botão {buttonB}
          //   </div>
          // )

          // formato 2 - muito mais sucinto
          //rendershowHustory ou renderAddCustomer poderia ser uma logica dentro de uma arrow function. Nesse caso era so colocar parentese ao final (). ex: renderShowHistory()
          //condição fica mais clara

          //Se hasCustomer for true aborda a primeira opção, se for false aborda a segunda
          hasCustomer ? renderShowHistory : renderAddCustomer
        }

        {/* forma 3 de condicional - Evitando que um componente seja renderizado */}
        {
          <div>
            <div>
              {hasCustomer ? renderShowHistory : renderAddCustomer}
            </div>
          { showCustomer() }
          </div>
        }
      </div>
    )
  }
}
