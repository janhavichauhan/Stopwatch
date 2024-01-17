import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds / 60000) % 60);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const centiseconds = Math.floor((milliseconds / 10) % 100);

    const padZero = (value) => ("0" + value).slice(-2);

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(centiseconds)}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p className="watch">{formatTime(time)}</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
};

export default Stopwatch;

