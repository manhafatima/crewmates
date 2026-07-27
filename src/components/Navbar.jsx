import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Crewmates</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/create">Create Crewmate</Link>
      </div>
    </nav>
  );
}

export default Navbar;