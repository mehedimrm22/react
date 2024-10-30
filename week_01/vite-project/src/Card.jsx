function Card(props) {
  return (
    <>
      <div className="card">
        <h2>{props.firstName}</h2>
        <p>Title: {props.title}</p>
        <p>Age: {props.age}</p>
        <p>Sports: {props.sports}</p>
      </div>
    </>
  );
}

export default Card;
