import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCount, incrementAsync } from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return <div></div>;
}
