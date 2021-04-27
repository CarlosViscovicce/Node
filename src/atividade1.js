import React, { useState } from "react";
import './atividade1.css';
import Kdu from './kdu';

function Atividade1() {

  const [user, setUser] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <div className="atividade1">
      <form>
        <div>
          <p>
            Digite seu nome:
          </p>
          <input
            value={user}
            onChange={e => setUser(e.target.value)}
            placeholder="Usuario"
          />
        </div>
        <div>
          <p>
            Digite o telefone:
          </p>
          <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="14 2108-2084"
          />
        </div>
      </form>
      <div className="Resultado_Atividade">
        <div className="Resultados">
          <p>{user}</p>
          <p>{phone}</p>
        </div>
      </div>

      <div className="Resultado_Atividade">
        <div className="Resultados">
          <button onClick={Kdu}> Veja autor </button>
          
        </div> 
      </div>


    </div>
  );
}

export default Atividade1;
