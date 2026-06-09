import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Counter Page</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </div>
  );
}

export default Counter;