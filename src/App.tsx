import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + counter);

  function checkDay() {
    if (counter == 0) return "Today Is: ";
    else if (counter > 0) return "Days From Today ";
    else return "Days Ago Was ";
  }

  return (
    <>
      <div className="flex gap-5 mt-10">
        <div className="flex w-1/2 bg-blue-600 items-center text-white p-4 justify-center gap-6">
          <button
            onClick={() => setCounter((c) => c - step)}
            className=" border  hover:bg-white hover:text-blue-600 transition-all border-white size-8 flex justify-center items-center"
          >
            -
          </button>
          <h1 className="font-bold ">Days : {counter}</h1>
          <button
            onClick={() => setCounter((c) => c + step)}
            className=" border  hover:bg-white hover:text-blue-600 transition-all border-white size-8 flex justify-center items-center"
          >
            +
          </button>
        </div>
        <div className="flex w-1/2 bg-emerald-600 items-center text-white p-4 justify-center gap-6">
          <button
            onClick={() => setStep((s) => (s < 2 ? 1 : s - 1))}
            className=" border  hover:bg-white hover:text-emerald-600 transition-all border-white size-8 flex justify-center items-center"
          >
            -
          </button>
          <h1 className="font-bold ">Step : {step}</h1>
          <button
            onClick={() => setStep((s) => s + 1)}
            className=" border  hover:bg-white hover:text-emerald-600 transition-all border-white size-8 flex justify-center items-center"
          >
            +
          </button>
        </div>
      </div>
      <div className="bg-gray-300 my-4 p-4">
        <span className="font-bold text-gray-700">Date: </span>{" "}
        <span className="bg-gradient-to-r font-bold from-blue-600 to-emerald-600 inline-block text-transparent bg-clip-text">
          <span>
            {counter !== 0 ? " " + Math.abs(counter) : ""}
            {checkDay()}
          </span>
          <span>{date.toDateString()}</span>
        </span>
      </div>
    </>
  );
}

export default App;
