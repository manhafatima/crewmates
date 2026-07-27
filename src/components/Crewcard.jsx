import { Link } from "react-router-dom";

function CrewCard({ crewmate }) {
  return (
    <div className="card">
      <h2>🚀 {crewmate.name}</h2>

      <p>⚡ Speed: {crewmate.speed}</p>

      <p>💪 Strength: {crewmate.strength}</p>

      <Link to={`/crewmate/${crewmate.id}`}>
        <button>View</button>
      </Link>

      <Link to={`/edit/${crewmate.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default CrewCard;