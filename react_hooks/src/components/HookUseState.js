import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "Bruno";

  const [name, setName] = useState("Richard");

  const changeNames = () => {
    userName = "Bruno Alves";

    setName("Richard Alves");
  };

  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(age);
  };

  return (
    <div>
      <hr />
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar Nomes</button>
      <hr />

      {/* 2 - useState e inputs */}
      <h2>useState e Inputs</h2>
      <p>Digite a sua idade: </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Mudar idade" />
      </form>
      <p>Você têm {age} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
