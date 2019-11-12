import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./Searchparams";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
