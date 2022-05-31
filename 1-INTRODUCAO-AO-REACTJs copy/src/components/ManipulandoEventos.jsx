import React, { Component } from 'react'

export default class ManipulandoEventos extends Component {
  render() {
    const name = 'Ingridzinha';
  
    const showEvent = (e) => {
      console.log('Evento Clicado');
      console.log(e);
      alert(name)
    }
    
    const button = <button onClick={ showEvent }>Mostrar evento</button>

    const handleChange = (e) => {
      const { value } = e.target;
      console.log(value);
    }

    return (
      <div>
        <input onChange={handleChange} />
        {button}
      </div>
    )
  }
}
