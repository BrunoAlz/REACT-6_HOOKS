import { useRef } from "react";
import SomeComponent from "./SomeComponent";

const HookeUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle</h2>
      {/* Referencia o Componente */}
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  );
};

export default HookeUseImperativeHandle;
