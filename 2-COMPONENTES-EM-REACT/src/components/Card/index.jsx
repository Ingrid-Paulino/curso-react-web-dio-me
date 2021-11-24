import React, { useState } from 'react';
import Button from './Button';

function Card() {

  //useState traz uma variavel e uma função
  //useState é um Hook de estado
  //valor começa com 0
  const [valor, setValor] = useState(0);

  const adicionar = () => {
    setValor(valor + 1)
  }

  const remover = () => {
    setValor(valor -1)
  }

  const zerar = () => {
    setValor(0)
  }

  return(
    <div className="card">
      <div className="card-header">
        Meu primeiro card
      </div>
      <div className="card-body">
        <p>{valor}</p>

        {/* COMPONENTIZANDO O BOTÃO */}
        <Button
          btnClassName="btn btn-success"
          handleClick={adicionar}
          name="Adicionar"
        />

        <Button
          btnClassName="btn btn-danger"
          handleClick={remover}
          name="Remover"
        />

        {/* SEM COMPONENTIZAR O BOTÃO */}
        <button
          type="button"
          class="btn btn-warning"
          onClick={zerar}
        >
          Zerar
        </button>

        {/* Componentizar as coisas é sempre o caminho, o codigo fica muito melhor */}

      </div>
    </div>
  )
}

export default Card;