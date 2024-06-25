import { useEffect, useState } from "react";
import Button from "../components/Button";
import useCount from "../hooks/useCount";

export default function CounterPage({ initialCount }) {
  const { count, handleClick } = useCount(initialCount);
  return (
    <div>
      <h1> Count is {count}</h1>
      <Button success rounded onClick={handleClick}>
        Increment
      </Button>
    </div>
  );
}
