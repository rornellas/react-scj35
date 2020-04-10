import React, { useReducer, createContext } from "react"

export const NegociacoesContext = createContext()

const initialState = {
    negociacoes: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_NEGOCIACAO":
            return {
                negociacoes: [...state.negociacoes, action.payload]
            }
        default:
            throw new Error("Faltou uma action!")
    }
}

export const NegociacoesContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
//O reducer serve para saber o ultimo estado quando varias informacao chegam ao mesmo tempo
//exemplo: 2 componentes enviam informacao para o mesmo context. Vai ser acionado o reducer para que tenhamos apenas 1 estado
    return ( 
        <NegociacoesContext.Provider value={[state, dispatch]}>
            {props.children}
        </NegociacoesContext.Provider>
    )
}