import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../slices/counter";

export const useCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};
