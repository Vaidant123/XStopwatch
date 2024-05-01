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

  const formatTime = () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  if (time === 0 && !isRunning) {
    console.log("Initial state");
  }

  const handleTestReset = () => {
    handleReset();
    console.log("Reset functionality");
  };

  useEffect(() => {
    if (time > 0 && isRunning) {
      console.log("Continuous operation");
    }
  }, [time, isRunning]);

  console.log("Time format: ", formatTime());

  useEffect(() => {
    if (time === 59) {
      console.log("Boundary condition 59sec");
    }
    if (time === 60) {
      console.log("Boundary condition (1 minute) ");
    }
  }, [time]);

  return (
    <div className="container">
      <div className="stopwatch">
        <h1>Stopwatch</h1>
        <div className="time">
          <p>Time: {formatTime()}</p>
        </div>
        <div className="buttons">
          <button onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={handleTestReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
