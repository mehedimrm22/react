import "./App.css";
import Card from "./Card.jsx";
import personsData from "./data/personsData.js";

import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <header>
            <h1>Demo React App Practicing</h1>
          </header>
          <main>
            <button onClick={handleLoginClick}>Log Out</button>
            <div className="cards">
              {personsData.map((person, index) => (
                <Card
                  key={person.id}
                  firstName={person.firstName}
                  title={person.title}
                  age={person.age}
                  sports={person.sports}
                />
              ))}
            </div>
          </main>
        </>
      ) : (
        <div>
          <p>Please log in to see the list</p>
          <button onClick={handleLoginClick}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default App;
