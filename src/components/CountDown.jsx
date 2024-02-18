import Timer from './countDown/Timer'
import React, { useRef, useEffect, useState, useCallback } from "react";
import { TimepickerUI } from "timepicker-ui";

const CountDown = () => {
  const curr = new Date();
  curr.setHours(0)
  curr.setMinutes(0)
  curr.setSeconds(0)

  const tmRef = useRef(null);
  const [inputValue, setInputValue] = useState();

  const testHandler = useCallback(({ detail: { hour, minutes } }) => {
    const time_in_ms = hour * 3600000 + minutes * 60000 + curr.getTime();
    setInputValue(time_in_ms);
  }, []);

  useEffect(() => {
    const tm = tmRef.current;

    const newPicker = new TimepickerUI(tm, {
      clockType: "24h",
      switchToMinutesAfterSelectHour: "false",
    });
    newPicker.create();

    tm.addEventListener("accept", testHandler);

    return () => {
      tm.removeEventListener("accept", testHandler);
    };
  }, [testHandler]);


  return (
    <div className="timepicker-ui" ref={tmRef}>
      <label htmlFor="timer" className="text-gray-600 mr-2">
        Timer (s):
      </label>
      <input
        type="text"
        placeholder="input time"
        className="timepicker-ui-input"
        defaultValue={inputValue}
      />
      <Timer targetTime={inputValue} />
    </div>
  );
};

export default CountDown
