import React, { useState, useContext } from "react"

import {NegociacoesContext} from '../../store'

export default () => {

  const data = userFormInput("")
  const quantidade = userFormInput("")
  const valor = userFormInput("")

  //traz o estado do contexto de negociacoes (dos componentes que estão dentro do NegociacoesContextprovider)
  const [state, dispatch] = useContext(NegociacoesContext)

  const onSubmit = event => {
    event.preventDefault()

    dispatch({
      type: 'ADD_NEGOCIACAO',
      payload: {
        data: data.value, 
        valor: valor.value, 
        quantidade: quantidade.value
      }
    })
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="data">Data</label>
        <input {...data} type="date" id="data" className="form-control" required autoFocus />
      </div>

      <div className="form-group">
        <label htmlFor="quantidade">Quantidade</label>
        <input {...quantidade}
          type="number"
          min="1"
          step="1"
          id="quantidade"
          className="form-control"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="valor">Valor</label>
        <input {...valor}
          id="valor"
          type="number"
          className="form-control"
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