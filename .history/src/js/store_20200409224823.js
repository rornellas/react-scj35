import React, { useReducer, createContext } from "react"

export const NegociacoesContext = createContext()

const initialState = {
    negociacoes: []
}

export const NegociacoesContextProvider = () => {
    const [] = userReducer(reducer, initialState)

    return <NegociacoesContext.Provider value={[]} />
}