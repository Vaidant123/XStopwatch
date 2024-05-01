import React, { useState, useEffect } from "react";
import "./App.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (currentTime % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="container">
      <div className="stopwatch">
        <h1>Stopwatch</h1>
        <div className="time">
          <p>Time: {formatTime(time)}</p>
        </div>
        <div className="buttons">
          <button onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
