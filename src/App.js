import React, { useState, useEffect } from "react";
import { Label10x10 } from "./components/Label10x10";
import { Label3x4 } from "./components/Label3x4";
import { LabelCryo } from "./components/LabelCryo";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   document.title = `Vous avez cliqué ${count} fois`;
  //   console.log(document.title);
  // });
  return (
    <div className="content">
      <button onClick={() => window.print()}>PRINT</button>
      {/* <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count !== 0 && <button onClick={() => setCount(count - 1)}>-</button>} */}
      <div className="all-labels">
        <Label10x10 />
        <Label3x4 />
        <LabelCryo />
      </div>
    </div>
  );
}

export default App;
