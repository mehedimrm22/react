import "./App.css";
import Card from "./Card.jsx";

import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    firstName: "Mehedi",
    title: "Developer",
    age: 26,
    sports: "Cricket",
  });

  return (
    <div>
      <header>Logo</header>
      <main>
        <Card
          firstName={person.firstName}
          title={person.title}
          age={person.age}
          sports={person.sports}
        />
        <Card
          firstName="Mahmudur"
          title="CEO"
          age="26"
          sports={person.sports}
        />
        <Card firstName="John" title="Developer" age="25" />
        <Card firstName="Karin" title="Designer" age="45" />
        <Card firstName="Belayet" title="Developer" age="22" />
        <Card firstName="Sara" title="Developer" age="25" />
      </main>
    </div>
  );
}

export default App;
