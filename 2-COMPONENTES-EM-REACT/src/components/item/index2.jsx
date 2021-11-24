//poderia distruturar o children. ex: ({children})
function Item2(props) {
  return (
    <li>
      <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
        {props.children} {/* --> poderia usar assim tbm  */}
        {/* {children} --> se eu destruturace, era so passar assin */}
      </a>
    </li>
  )
}

export default Item2;