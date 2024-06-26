import { useReducer } from "react";
import Button from "../components/Button";
import useCount from "../hooks/useCount";
import Panel from "../components/Panel";

const reducer = (state, action) => {
  if (action.type === "increment") return { ...state, count: state.count + 1 };
  if (action.type === "decrement") return { ...state, count: state.count - 1 };
  if (action.type === "change-add-value") {
    return { ...state, valueToAdd: action.payload };
  }
  if (action.type === "add-value") {
    console.log(state);
    return { count: state.count + state.valueToAdd, valueToAdd: 0 };
  }
};

export default function CounterPage({ initialCount }) {
  // const { count, handleClick } = useCount(initialCount);
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [{ count, valueToAdd }, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: "increment",
    });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: "decrement",
    });
  };

  const handleChange = (e) => {
    const val = parseInt(e.target.value) || 0;
    // setValueToAdd(val)
    dispatch({
      type: "change-add-value",
      payload: val,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count+valueToAdd);
    // setValueToAdd(0)
    dispatch({
      type: "add-value",
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg"> Count is {count}</h1>
      <div className="flex flex-row">
        <Button success rounded onClick={increment}>
          Increment
        </Button>
        <Button warning rounded onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}
