# Components

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
```

## Components should start with Uppercase

## Remember to put "props" as parameters

<br />
<br />

# Class Component using render

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {props.name}</h1>;
  }
}
```

## Name Export

```js
export function Box() {}
export function Circle() {}

import { Box, Circle } from "./Box";
```

## Class component with state

```js
import React, {Component} from 'react';

class Counter extends Component {
  // Initialize state as a class property
  state = {
    count: 0;
  };

  render(){
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Count: {this.state.count}</p>
      </div>
    )
  };

}
export default Counter;
```

## Hooks

```
  - Naming convention of hooks should start with prefix use. Like useState, useEffect
  - Hooks must be called at the top level of a component, before the return statement. They can't be called inside a conditional statement, loop or nested functions
  - Hooks must be called from a React function (inside a React component or another hook). It shouldn't be called from a Vanilla JS function
```

## useState

```js
import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({ id: 1, name: "Margit" });
  const [age, setAge] = useState(29);

  return (
    <div>
      <h2>Person Details</h2>
      <p>ID: {person.id}</p>
      <p>Name: {person.name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Person;
```
