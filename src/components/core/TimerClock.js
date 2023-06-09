import React from "react";

const TimerClock = ({ hours, minutes, seconds }) => {
  return (
    <div className="timer-clock">
      {seconds} : {minutes}
    </div>
  );
};

export default TimerClock;
