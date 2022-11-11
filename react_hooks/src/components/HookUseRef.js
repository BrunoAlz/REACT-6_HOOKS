import { useState, useEffect, useRef } from "react";

const HookUseRef = () => {
  // useRef
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  //  useRef com DOM
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleRefSubmit = (e) => {
    e.preventDefault();

    setText("");

    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef</h2>
      <p>O Componete redenrizou: {numberRef.current} vezes.</p>
      <p>Counter 1: {counter}</p>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador 1 </button>
      <button onClick={() => setCounterB(counterB + 1)}>Contador 2 </button>
      <hr />

      <h2>useRef e o DOM</h2>
      <form onSubmit={handleRefSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;
