import React, { useState } from 'react';
import './App.css';

import NegociacaoForm from './js/app/components/NegociacaoForm'
import { NegociacoesContextProvider } from './js/store';

function App() {

    return (
      <div className="App">
        <NegociacoesContextProvider>
          <NegociacaoForm />
        </NegociacoesContextProvider>
      </div>
    );

}

export default App;
