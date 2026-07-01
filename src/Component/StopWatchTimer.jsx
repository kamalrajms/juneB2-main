import React, { useState, useEffect } from "react";

export default function StopWatchTimer() {
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);
  //   console.log(running);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setSec((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [running]);

  const handleclick = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };
  const handleReset = () => {
    setSec(0);
    setRunning(false);
  };

  return (
    <div>
      <h1>Timer : {sec}</h1>
      <button onClick={handleclick}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
