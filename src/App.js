import React, { useState } from "react";
import "./App.css";
import List from "./List";
import data from "./data";
import Button from "./Button";
import ReloadBtn from "./Reload";

function App() {
  const [birthday, setBirthday] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>{birthday.length} Birthdays Today </h3>
        <List birthday={birthday} />
        <Button setBirthday={setBirthday} />
        <ReloadBtn setBirthday={setBirthday} />

      </div>
    </main>
  );
}

export default App;
