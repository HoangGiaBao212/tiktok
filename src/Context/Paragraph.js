import { useContext } from "react";
import { ThemeContext } from "./index";

function Paragraph() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2 className={theme}>hi</h2>
    </div>
  );
}

export default Paragraph;
