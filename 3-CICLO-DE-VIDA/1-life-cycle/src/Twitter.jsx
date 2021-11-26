import React, { Component } from 'react';

//USANDO CLASS
class Twitter extends Component {

  state = {
    tweet: 'title'
  }

  //depois que renderiza o componente é montado
 // Final da montagem 
  // aqui pode chamar serviços ,verificar se está carregando ... 
  componentDidMount() { 
    const { posts, loading } = this.props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
  }

  // Atualização 
  componentDidUpdate(prevProps) {
    const { loading } = this.props
    if (this.props.loading !== prevProps.loading) {
      console.log('componentDidUpdate:loading', loading)
    }
  }

   //desmontagem do componente
    componentWillUnmount() { 
      console.log('componentWillUnmount: fui removido :(')
    }

    //Olha se ele pode renderizar a aplicação de novo
    /// retorna um boleano , se for true renderiza de novo senao nao renderiza 
    shouldComponentUpdate(nextProps, nextState) {
      return this.state.tweet !== nextState.tweet
    }

    tweet = () => {
      this.setState({
        tweet: true
      })
    }

   //Primeiro renderiza
  render () {
    const { posts } = this.props
    console.log('render', posts)
    return (
      <div>
        <button onClick={this.tweet}>Re-render</button>
        tests
      </div>
    )
  }
}

export default Twitter
