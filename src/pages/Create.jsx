import AttributeSelector from "../components/AttributeSelector";

function Create() {
  return (
    <div className="container">
      <h1>Create Crewmate</h1>

      <form>
        <label>Name</label>

        <input
          type="text"
          placeholder="Enter name"
        />

        <AttributeSelector label="Speed" />

        <AttributeSelector label="Strength" />

        <button>Create Crewmate</button>
      </form>
    </div>
  );
}

export default Create;