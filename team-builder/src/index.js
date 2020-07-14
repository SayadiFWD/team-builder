import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Notes from "./components/Notes";
import Form from "./components/Form";

function App() {
  const [state, setState] = useState({
    name:'ahmad',
    email:'ahmadwali_sayadi@yahoo.com',
    roll:'1'
  });

  const members = (newMember) => {
    setState([...state, newMember]);
  };

  return (
    <div className="App">
      <Form members={members} />
      <Notes state={state} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
