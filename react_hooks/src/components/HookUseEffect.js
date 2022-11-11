import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  // UseEffect sem dependências

  useEffect(() => {
    console.log("Estou sendo Executado");
  });

  const [number, setNumber] = useState(1);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  // useEffect com array de Dependência vazio
  useEffect(() => {
    console.log("Sou executado apenas 1 vez")
  }, []);

  return (
    <div>
      <h2>UseEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeNumber}>Mudar Núimero</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
