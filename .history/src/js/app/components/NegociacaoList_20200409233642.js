import React, { useContext } from "react"

import {NegociacoesContext} from '../../store'

export default () => {
  const [state] = useContext(NegociacoesContext)
  return (
    <table className="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                {state.negociacoes.map(
                  (item, index) =>
                  <tr key={index}>
                    <td>item.data</td>
                    <td>item.quantidade</td>
                    <td>item.valor</td>
                    <td>item.quantidade * item.valor</td>
                  </tr>
                )}
            </tbody>
                  
            <tfoot>

            </tfoot>
            
        </table>
  )
}
