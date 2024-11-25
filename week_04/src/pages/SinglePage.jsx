import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import personsData from "../data/personsData";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const person = personsData.find((person) => person.id === parseInt(id));
  return (
    <div>
      <h2>Single Page for {person.firstName}</h2>
      <p>Title: {person.title}</p>
      <p>Age: {person.age}</p>
      <p>Animal: {person.animal}</p>
      <Button text="Back" onClick={() => navigate("/")} />
    </div>
  );
};

export default SinglePage;
