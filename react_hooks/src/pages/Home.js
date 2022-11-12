import { useContext } from "react";
import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";

import { someContext } from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookeUseImperativeHandle from "../components/HookeUseImperativeHandle";

const Home = () => {
  const { contextValue } = useContext(someContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>UseContext</h2>
      <p>Valor do Contexto: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo /> 
      <HookUseLayoutEffect />
      <HookeUseImperativeHandle />
    </div>
  );
};

export default Home;
