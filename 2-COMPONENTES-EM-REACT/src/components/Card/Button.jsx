function Button({handleClick, name, btnClassName}) {
  return(
    <>
      {/* COMPONENTIZANDO O BOTÃO */}
      <button
        type="button"
        className={ btnClassName }
        onClick={ handleClick }
        >
        { name }
      </button>
    </>
  )
}

export default Button;