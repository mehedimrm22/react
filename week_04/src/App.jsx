import "./App.css";
import Root from "./pages/Root";
import List from "./pages/List";
import About from "./pages/About";

function App() {
  return (
    <>
      <Root />
      <List />
      <About />
    </>
  );
}

export default App;

// Previous Codes

/* 
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  const handleClick = (id) => {
    console.log(`Card ${id} was clicked`);
  };

  return (
    <>
      <header>
        <h1>Demo app for practicing React</h1>
        <Button
          onClick={toggleLogin}
          text={isLoggedIn ? "Log out" : "Log in"}
        />
      </header>
      <main>
        {isLoggedIn ? (
          <>
            <h2>Employees</h2>
            <div className="list">
              {personsData.map((person) => (
                <Card
                  key={person.id}
                  firstName={person.firstName}
                  title={person.title}
                  age={person.age}
                  animal={person.animal}
                  onClick={() => handleClick(person.id)} // Please note: this event is only in the App and is not related to edit/save button
                />
              ))}
            </div>
          </>
        ) : (
          <div>
            <p>Please log in to see the list</p>
          </div>
        )}
      </main>
    </>
  );
*/
