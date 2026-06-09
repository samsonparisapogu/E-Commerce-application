import { useState } from "react";

function Crud() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (!input) return;

    setItems([
      ...items,
      {
        id: Date.now(),
        name: input,
      },
    ]);

    setInput("");
  };

  const deleteItem = (id) => {
    setItems(
      items.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <h1>CRUD Operations</h1>

      <input
        type="text"
        value={input}
        placeholder="Enter Product"
        onChange={(e) =>
          setInput(e.target.value)
        }
      />

      <button onClick={addItem}>
        Add
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}

            <button
              onClick={() =>
                deleteItem(item.id)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;