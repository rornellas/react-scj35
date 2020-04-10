import React, { useReducer, createContext } from "react"

export const NegociacoesContext = createContext()

const initialState = {
    negociacoes: []
}

export const NegociacoesContextProvider = () => {
    const [] = userReducer(reducer, initialState)
//O reducer serve para saber o ultimo estado quando varias informacao chegam ao mesmo tempo
    return <NegociacoesContext.Provider value={[]} />
}