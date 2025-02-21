import { useState } from "react";

const DebugComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind Debug Test
        </h1>

        <div className="space-y-4">
          <p className="text-gray-500">
            If you can see this styled nicely, Tailwind is working!
          </p>

          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Count is: {count}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DebugComponent;
