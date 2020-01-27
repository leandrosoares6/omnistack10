import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);


  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
  }

  async function handleDeleteDev(data) {
    
    const { _id } = data;
    await api.delete(`/devs/${_id}`,);

    const indexDevToRemove = devs.indexOf(data);
    devs.splice(indexDevToRemove, 1);

    setDevs([...devs]);
  }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} devRem={handleDeleteDev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;


// Componente: Bloco isolado do HTML, CSS e JS o qual não interfere o restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

