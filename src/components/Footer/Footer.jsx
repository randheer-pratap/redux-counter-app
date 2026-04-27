import { useSelector } from "react-redux";
function Footer() {
  const count = useSelector((state) => state.counter.value);
  return (
    <footer className="flex items-center justify-between px-4 py-4 bg-gray-800 text-white">
      <h1 className="text-lg font-semibold">
        Copyright © 2026 My App. All rights reserved.
      </h1>

      <span className="ml-auto text-sm font-medium bg-blue-500 px-3 py-1 rounded-full">
        Count: {count}
      </span>
    </footer>
  );
}

export default Footer;
