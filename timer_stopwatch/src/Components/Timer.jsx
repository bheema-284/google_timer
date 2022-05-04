import React, { useState, useRef, useEffect } from 'react';
import './styles.css';
export const Timer = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00');
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const decrement = useRef(null);
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    decrement.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(decrement.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    decrement.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : '0' + minutes) +
          'm' +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds) +
          's',
      );
    }
  };

  const clearTimer = (e) => {
    setTimer('05:00');
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 300);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div className="App">
      <h1>{timer}</h1>
      <div className="stopwatch-card">
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
          <button className="reset" onClick={onClickReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
