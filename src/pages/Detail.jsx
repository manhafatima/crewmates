import { useParams, Link } from "react-router-dom";
import crewmates from "../data/crewmates";

function Detail() {
  const { id } = useParams();

  const crewmate = crewmates.find(
    (c) => c.id === Number(id)
  );

  return (
    <div className="container">
      <h1>{crewmate.name}</h1>

      <p>Speed: {crewmate.speed}</p>

      <p>Strength: {crewmate.strength}</p>

      <p>This crewmate is ready for space!</p>

      <Link to={`/edit/${crewmate.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default Detail;