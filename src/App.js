import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [flag, setFlag] = useState(false);
  const [inputDisable, setInputDisable] = useState(false);
  const [pauseDisable, setPauseDisable] = useState(true);

  const handleChange = (e) => {
    setInput(e.target.value);
    setMinutes(e.target.value);
  }; /* onclick-handleChange */

  const start = () => {
    setFlag(true);
    setInputDisable(true);
    setPauseDisable(false);
  }; /* start-btn */

  const reset = () => {
    setFlag(false);
    setInputDisable(false);
    setSeconds(0);
    setMinutes(0);
    setInput(0);
    setPauseDisable(true);
  }; /* reset-btn */

  const pause = () => {
    setFlag(false);
    setPauseDisable(true);
  }; /* pause-btn */

  useEffect(() => {
    if (flag) {
      const interval = setInterval(() => {
        if (parseInt(seconds) == 0 && parseInt(minutes) !== 0) {
          setSeconds((seconds) => seconds + 59);
          setMinutes((minutes) => minutes - 1);
        } else if (parseInt(seconds) == 0 && parseInt(minutes) == 0) {
        } else {
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [seconds, minutes, flag]);

  return (
    <div>
      <div className="main">   {/* main */}
        <div className="form-item">  {/* input */}
          <input
            type="number"
            id="number"
            autocomplete="off"
            required
            disabled={inputDisable}
            value={input}
            onChange={handleChange}
          />
        </div>

        <div className="timer">  {/* timer */}
          {parseInt(minutes) < 10 ? "0" + minutes : minutes} :{" "}
          {parseInt(seconds) < 10 ? "0" + seconds : seconds}
        </div>

        <button className="start">  {/* start-button */}
          <i class="fa-solid fa-circle-play" onClick={start}></i>
        </button>
        <div className="btn">  {/* buttons */}
          <button className="pause">  {/* pause-btn */}
            <i
              class="fa-solid fa-pause"
              onClick={pause}
              pauseDisable={pauseDisable}
            ></i>
          </button>
          <button className="reset">  {/* reset-btn */}
            <i class="fa-solid fa-rotate-right" onClick={reset}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
