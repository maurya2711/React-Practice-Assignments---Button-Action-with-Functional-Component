import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [para, showPara] = useState(false);

  const changeClassName = () => {
    showPara(!para);
  };

  return (
    <div id="main">
      <button id="click" onClick={(e) => changeClassName(e)}>
        Click Me
      </button>
      {para && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
