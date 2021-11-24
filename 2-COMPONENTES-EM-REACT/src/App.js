import Card from './components/Card';
import Item from './components/item'; //depois de item estou pegando a pasta index.js, o react ja esta ligadão
import Item2 from './components/item/index2'; //depois de item estou pegando a pasta index.js, o react ja esta ligadão


function App() {
  return (
    <>
    <h1>Aplicação com ReactJS</h1>
    <ul>
      {/* antes era clas troquei para className */}
      {/* href estava reclamando pois estava vazio, ent coloquei uma / para parar de reclamar o lint */}
      <li> 
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">Item1</a>
      </li>
      <li> 
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">Item 2</a>
      </li>
      {/* texto recebe o valor da minha props la no components/item/index.js */}
      <Item texto="Item 3"/> {/*chamei o component - Podemos salvar as coisas repetidas em componentes */}
      <Item texto="Separação de tipos de formatos"/>

    {/* usando a propriedade children, essa propriedade ja vem no react, não é necessaria declara-la */}
    {/* ex continua no components/item/index2.js */}
      <Item2>
        Item 1
      </Item2>
      <Item2>
        Item 2
      </Item2>
      <Item2>
        Item 3
      </Item2>
    </ul>
    <Card />
    </>
  )
}

export default App;