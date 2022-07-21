import React, { useState, useEffect, useRef } from "react";

import "./Timer.scss";

const Timer = ({ status, setStatus, time }) => {
  const INITIAL_COUNT = time;
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const twoDigits = (num) => String(num).padStart(2, "0");

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus("stopped");
      }
    },
    status === "started" ? 1000 : null
    // passing null stops the interval
  );
  return (
    <div className="timer">
      <h4 className="timer__display">
        {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
        {twoDigits(secondsToDisplay)}
      </h4>
    </div>
  );
};

export default Timer;
