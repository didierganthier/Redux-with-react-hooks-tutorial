import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { decrementCounter, incrementCounter } from "./store/actions";

export default () => {
  const count = useSelector(state => state.counter, shallowEqual);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          dispatch(incrementCounter());
        }}
      >
        Increment!
      </button>
      <button
        onClick={() => {
          dispatch(decrementCounter());
        }}
      >
        Increment!
      </button>
    </div>
  );
};
