import React from "react";

const TimerClock = ({ hours, minutes, seconds }) => {
  return (
    <div className="timer-clock">
      {minutes=0} : {seconds=20}
    </div>
  );
};

export default TimerClock;
