import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "./reducer";
import logger from "./logger";

function Provider({ children }) {
  const [stare, dispatch] = useReducer(logger(reducer), initState);
  return (
    <Context.Provider value={[stare, dispatch]}>{children}</Context.Provider>
  );
}
export default Provider;
