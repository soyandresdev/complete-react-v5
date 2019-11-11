import React from "react";
import { render } from "react-dom";
import Searchparams from "./Searchparams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Searchparams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
