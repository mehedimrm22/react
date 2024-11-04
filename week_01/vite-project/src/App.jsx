import "./App.css";
import Card from "./Card.jsx";
import personsData from "./data/personsData.js";

import { useState } from "react";

function App() {
  return (
    <div>
      <header>Demo Practicing React App</header>
      <main>
        {personsData.map((person, index) => (
          <Card
            firstName={person.firstName}
            title={person.title}
            age={person.age}
            sports={person.sports}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
