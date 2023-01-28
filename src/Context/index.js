import { useState, createContext } from "react";
import { Content } from "./Content";

export const ThemeContext = createContext();

function Context() {
  const [theme, setTheme] = useState("dark");

  // console.log(theme);
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 30 }}>
        <button onClick={() => setTheme(theme !== "dark" ? "dark" : "red")}>
          Toggle theme
        </button>
        <Content theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default Context;
