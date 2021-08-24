import React, { useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Initializes Materialize JS.
    M.AutoInit();
  }, []);
  return <h1>Welcome to Tech Clerk!</h1>;
};

export default App;
