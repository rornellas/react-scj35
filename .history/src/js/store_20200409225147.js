import React, { useReducer, createContext } from "react"

export const NegociacoesContext = createContext()

const initialState = {
    negociacoes: []
}

export const NegociacoesContextProvider = () => {
    const [] = userReducer(reducer, initialState)
//O reducer serve para saber o ultimo estado quando varias informacao chegam ao mesmo tempo
//exemplo: 2 componentes enviam informacao para o mesmo context. Vai ser acionado o reducer para que tenhamos apenas 1 estado
    return <NegociacoesContext.Provider value={[]} />
}