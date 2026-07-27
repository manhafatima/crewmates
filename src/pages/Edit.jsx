import { useParams } from "react-router-dom";
import crewmates from "../data/crewmates";
import AttributeSelector from "../components/AttributeSelector";

function Edit() {
  const { id } = useParams();

  const crewmate = crewmates.find(
    (c) => c.id === Number(id)
  );

  return (
    <div className="container">
      <h1>Edit Crewmate</h1>

      <form>
        <label>Name</label>

        <input
          defaultValue={crewmate.name}
        />

        <AttributeSelector label="Speed" />

        <AttributeSelector label="Strength" />

        <button>Save Changes</button>

        <button type="button">
          Delete Crewmate
        </button>
      </form>
    </div>
  );
}

export default Edit;