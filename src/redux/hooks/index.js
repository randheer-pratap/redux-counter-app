import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../slices/counter";

export const useCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  };
};
