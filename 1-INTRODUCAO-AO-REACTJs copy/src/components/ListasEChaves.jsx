import React, { Component } from 'react'

export default class ListasEChaves extends Component {
  render() {
    const listCustomer = [
      {
        id: 1,
        name: "Ester",
        skills: ["HTML", "CSS", "JAVASCRIPT"]
      },
      {
        id: 2,
        name: "Luana",
        skills: ["ASSENBLY"]
      },
      {
        id: 3,
        name: "Clara",
        skills: ["REASON"]
      }
    ]

    //Dica: não é aconcelhado usar index como key/chave
    //Separar o codigo em blocos é muito importante, o codigo fica mais organizado
    //key tem que ser unca
    const renderCustomers = (customer, index) => {
      return(
        <div key={`customer-${customer.id}`}>
          <li>{customer.name}</li>
          {customer.skills.map(renderSkills)}
        </div>
      )
    }

    const renderSkills = (skill, index) => {
      return(
        <div style={{ paddingLeft: '30px'}} key={`skill-${index}`}>
          <li>{skill}</li>
        </div>
      )
    }

    return (
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    )
  }
}