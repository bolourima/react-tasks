import React, { useState, useEffect } from "react";

export const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [stop, setstop] = useState(false);

  useEffect(() => {
    let interval;

    if (stop) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [stop]);

  function startTime() {
    setstop(true);
  }

  function stopTime() {
    setstop(false);
  }

  return (
    <div className="flex gap-6 justify-center h-56 items-center">
      <button
        onClick={startTime}
        className="bg-yellow-300 h-8 rounded-md w-11"
        disabled={stop}
      >
        Start
      </button>
      <p>{seconds}</p>
      <button
        onClick={stopTime}
        className="bg-red-300 h-8 rounded-md w-11"
        disabled={!stop}
      >
        Stop
      </button>
    </div>
  );
};
