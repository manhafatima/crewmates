import Crewcard from "../components/Crewcard";
import crewmates from "../data/crewmates";

function Home() {
  return (
    <div className="container">
      <h1>🚀 My Crewmates</h1>

      <p className="subtitle">
        Create your own elite space crew and manage every astronaut on your
        mission.
      </p>

      <div className="cards">
        {crewmates.map((crew) => (
          <Crewcard
            key={crew.id}
            crewmate={crew}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;