import Container from "./containers/Container";
import { useCounter } from "../redux/hooks";

function Counter() {
  const { count, increment, decrement, reset } = useCounter();
  // set MAX const to 21 and MIN const to 0
  const MAX = 21;
  const MIN = 0;
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-8">
        <h1 className="text-5xl font-bold text-white mb-12 drop-shadow-lg">
          Counter App
        </h1>
        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <div className="text-center">
            <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block mb-10">
              {count}
            </span>
            <div className="flex gap-4 justify-center mb-8">
              <button
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={increment}
                disabled={count >= MAX}
              >
                +
              </button>
              <button
                className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={decrement}
                disabled={count <= MIN}
              >
                -
              </button>
            </div>
            <button
              className="w-full px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={reset}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Counter;
