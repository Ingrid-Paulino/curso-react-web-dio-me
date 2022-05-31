import React from 'react';
import Condicionais from './components/Condicionais';
import ListasEChaves from './components/ListasEChaves';
import './App.css';
import ManipulandoEventos from './components/ManipulandoEventos';

function App() {
  return (
    <div>
      <Condicionais />
      <ListasEChaves />
      <ManipulandoEventos />
    </div>
    
  );
}

export default App;
