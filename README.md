# React Learnings

```cmd
npm create vite@latest
y
project-name
react
JavaScript

cd project name
npm install
npm run dev
```

# HR application for practicing the React

- Create component folder and add two components
- Create CSS files for both components
- Set up the cards
- import employeeList into main app component and render it to display list of list

## Handling Events

## Step 5

- Update the readme with an overview of the app
- List core features with descriptions
- Include a sample usage guide
- Reflect on what you've practiced
- Push your today's work to GitHub

### week_04

<!-- // Previous Codes


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
); -->
