//props - são as propriedades que eu vou usar nas tags
//Eu podera distruturar a props ex: ({ xablau })
function Item(props) {
  // const {texto} = props; --> poderia distruturar dessa maneira tbm

  return (
    <>
      <li>
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
          
          {props.texto}
          {/* {texto}  */} {/* --> ussaria dessa forma se eu utilizace a destruturação da linha 4  */}
        </a>
      </li>
    </>
  )
}

export default Item;