import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountDown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice ">
      <span className="text-green-400">Your Meditation is over</span>
      <p>Please select a future time for Meditation.</p>
    </div>
  );
};

const WrongTimeNotice = () => {
  return (
    <div className="expired-notice">
      <span>You chose the Wrong time.</span>
      <p>Please select a future time for Meditation.</p>
    </div>
  );
};

const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a href="" className="countdown-link">
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={hours <= 1} />
        <p>:</p>
        <DateTimeDisplay
          value={minutes}
          type={"Mins"}
          isDanger={hours <= 0}
        />
        <p>:</p>
        <DateTimeDisplay
          value={seconds}
          type={"Seconds"}
          isDanger={false}
        />
      </a>
    </div>
  );
};

const Timer = ({ targetTime }) => {
  const [hours, minutes, seconds] = useCountdown(targetTime);

  return hours + minutes + seconds > 0 ? (
    <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />
  ) : hours + minutes + seconds ?(
    <WrongTimeNotice />
  ):<ExpiredNotice />

};

export default Timer;
