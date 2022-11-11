import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "Bruno";

  const [name, setName] = useState("Richard");

  const changeNames = () => {
    userName = "Bruno Alves";

    setName("Richard Alves");
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar Nomes</button>
      <hr />
    </div>
  );
};

export default HookUseState;
