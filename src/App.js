import React from "react";
import { useState } from "react";
function App() {
  const [Items, SetItem] = useState("");

  const [todos, setTodos] = useState([]);

  const handleItem = (event) => {
    event.preventDefault();
    if (Items) {
      setTodos([...todos, Items]);
      SetItem("");
    } else alert("No Items");
  };

  return (
    <div className="Container">
      <h1>Our Lists of todo </h1>
      <div className="Form">
        <form>
          <label>Enter Item </label>
          <br />
          <input
            type="text"
            value={Items}
            onChange={(event) => {
              SetItem(event.target.value);
            }}
          />
          <button onClick={handleItem}>Add</button>
        </form>
      </div>
      {todos.map((newItem, index) => (
        <div className="Items_parent">
          <div className="Items">
            <h4 style={{ textTransform: "uppercase" }}>{newItem}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
