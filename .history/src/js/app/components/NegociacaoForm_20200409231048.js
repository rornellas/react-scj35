import React, { useState, useContext } from "react"

import {NegociacoesContext} from '../../store'

export default () => {

  const data = userFormInput("")

  //traz o estado do contexto de negociacoes (dos componentes que estão dentro do negociacoescontextprovider)
  const [state, dispatch] = useContext(NegociacoesContext)

  const onSubmit = event => {
    event.preventDefaul()
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-group">
        <label for="data">Data</label>
        <input {...data} type="date" id="data" className="form-control" required autofocus />
      </div>

      <div className="form-group">
        <label htmlFor="quantidade">Quantidade</label>
        <input
          type="number"
          min="1"
          step="1"
          id="quantidade"
          className="form-control"
          value="1"
          required
        />
      </div>

      <div className="form-group">
        <label for="valor">Valor</label>
        <input
          id="valor"
          type="number"
          className="form-control"
          min="0.01"
          step="0.01"
          value="0.0"
          required
        />
      </div>

      <button className="btn btn-primary" type="submit">Incluir</button>
    </form>
  )
}

//mantem um estado para o formulário, apenas para este componente
function userFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const handleChange = element => {
    setValue(element.target.value)
  }
  return {
    value,
    onChange: handleChange
  }
}