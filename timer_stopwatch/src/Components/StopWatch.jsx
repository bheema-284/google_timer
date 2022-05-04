import './styles.css';
import React, { useState, useRef } from 'react';

export const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours}h : ${getMinutes}m : ${getSeconds}s`;
  };

  return (
    <div className="app">
      <div className="stopwatch-card">
        <h1>{formatTime()}</h1>
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button className="start" onClick={handleStart}>
              Start
            </button>
          ) : isPaused ? (
            <button className="start" onClick={handlePause}>
              Stop
            </button>
          ) : (
            <button className="start" onClick={handleResume}>
              Start
            </button>
          )}
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
