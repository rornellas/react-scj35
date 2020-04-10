import React from 'react';
import './App.css';

import NegociacaoForm from './js/app/components/NegociacaoForm'
import { NegociacoesContextProvider } from './js/store';
import NegociacaoList from './js/app/components/NegociacaoList';

function App() {

    return (
      <div className="App">
        <NegociacoesContextProvider>
          <NegociacaoForm />
          <NegociacaoList />
        </NegociacoesContextProvider>
      </div>
    );

}

export default App;
