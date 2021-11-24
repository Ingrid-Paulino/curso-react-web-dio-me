import React, { Component } from 'react';
import Twitter from './Twitter';

class App extends Component {
  state = {
    loading: false,
    actived: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading:true
      })
    }, 3000)
  }

  //com arrow function não precisa de bind
  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  render() {
    const posts = [
      {
        title: 'xpt',
        description: 'foo'
      },
      {
        title: 'xpt',
        description: 'foo'
      },
    ]

    return (
      <div>
        <button onClick={this.onRemove}>
        Remover componente</button>
        {this.state.actived && (
          <Twitter posts={posts} loading={this.state.loading} />
        )}
        
      </div>
    )
  }
}

export default App;