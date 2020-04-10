import React, {useState} from "react"

export default() => {
    (
<form className="form">
      <div className="form-group">
        <label for="data">Data</label>
        <input type="date" id="data" className="form-control" required autofocus />
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