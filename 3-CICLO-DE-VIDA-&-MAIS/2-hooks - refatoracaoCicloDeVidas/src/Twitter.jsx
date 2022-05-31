//REFATORAÇÃO USANDO FUNCTION
import React, { useEffect, useState, memo } from 'react';

// esse é o memo, ele é o shouldComponentUpdate
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading
}

function Twitter(props) {
  const { loading } = props;
  const [tweet, setTweet] = useState('titulo')

  //componentDidMount - com array vazio
  useEffect(() => {
    const { posts, loading } = props;
    console.log('componentDidMount', posts);
    console.log('componentDidMount:loading', loading);
  }, [])

  //componentDidUpdate
  //assim que a propriedade loading for alterada, ele cai nesse useEffect. Fazendo a atualização. posso passar varios valores no []
  useEffect(() => {
      console.log('componentDidUpdate:loading', loading);
  }, [loading])

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount: fui removido :(');
    }
}, [])

  const handleTweet = () => {
    setTweet('Tweet atualizado')
  }

  //Primeiro renderiza
    console.log('Tweet atualizado:', tweet);
    return (
      <div>
        <button onClick={handleTweet}>Re-render</button>
        <br />
        tests
      </div>
    )
}

//memo aceita como argumento uma segunda função
export default memo(Twitter, areEqual);