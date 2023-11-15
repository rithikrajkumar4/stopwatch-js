import React, { useEffect, useState } from "react";
import "./App.css";
// function Solution() {
//   const [time, setTime] = useState(5);
//   const [isActive, setIsActive] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   useEffect(() => {
//     let interval = null;
//     if (isActive) {
//       interval = setInterval(() => {
//         setTime((prevtime) => prevtime - 1);
//       }, 1000);
//       if (time === 0) {
//         clearInterval(interval);
//       }
//     } else {
//       if (!isPaused) {
//         const min = document.getElementById("min");
//         const sec = document.getElementById("sec");
//         setTime(+(min.value * 60) + +sec.value);
//       } else {
//         setIsPaused(false);
//         clearInterval(interval);
//         setIsActive(false);
//       }
//     }
//     return () => clearInterval(interval);
//   }, [isActive, time]);

//   return (
//     <Fragment>
//       <div>
//         <label>
//           <input type="number" id="min" onChange={() => setTime(time + 1)} />
//           Minutes
//         </label>
//         <label>
//           <input type="number" id="sec" onChange={() => setTime(time + 1)} />
//           Seconds
//         </label>

//         <button onClick={() => setIsActive(true)}>START</button>
//         <button onClick={() => setIsPaused(true)}>PAUSE / RESUME</button>
//         <button onClick={() => setTime(0)}>RESET</button>

//         <h1>
//           <span>{("0" + Math.floor(time / 60)).slice(-2)}:</span>
//           <span>{("0" + Math.floor(time % 60)).slice(-2)}</span>
//         </h1>
//       </div>
//     </Fragment>
//   );
// }

const arr = [
  1, 3, 3, 4, 5, 56, 6, 7, 7, 7, 7, 7, 7, 353, 34, 4, 4, 45, 3, 3, 43, 43, 3,
];

function Solution() {
  // sorting the array
  arr.sort((a, b) => b - a);
  const st = new Map();

  arr.forEach((item) => {
    if (!st[item]) st[item] = 1;
    st[item] += 1;
  });
  console.log(st.hasOwnProperty);

  console.log("Component Rendered", Math.random());
  const [counter, setCounter] = useState(1);
  const [time, setTime] = useState(0);
  const [started, setStared] = useState(false);
  useEffect(() => {
    let interval = null;
    if (started) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    console.log("Hello", Math.random());
    return () => clearInterval(interval);
  }, [started]);

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };
  const addValue = () => {
    let value = document.getElementById("var").value;
    setCounter((prevCounter) => prevCounter + +value);
  };
  const minusValue = () => {
    let value = document.getElementById("var").value;
    // console.log(typeof +value);
    setCounter((prevCounter) => prevCounter - +value);
  };
  const StartTheClock = () => {
    setStared(true);
  };
  const StopTheClock = () => {
    setStared(false);
  };
  const ResetTheClock = () => {
    setTime(0);
  };
  const ResumeTheClock = () => {
    if (started) return;
    setStared(true);
  };
  return (
    <div>
      <h1>Value is :{counter}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrement}>-1</button>
      <br />
      <input type="number" id="var" />
      <button onClick={addValue} type="submit">
        Add
      </button>
      <button onClick={minusValue} type="submit">
        Minus
      </button>
      <div>
        <h1>Stop Watch</h1>
        <h2>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </h2>
        {!started && time === 0 && (
          <button onClick={StartTheClock}>Start</button>
        )}
        {started && <button onClick={StopTheClock}>Stop</button>}
        {!started && time !== 0 && (
          <button onClick={ResumeTheClock}>Resume</button>
        )}
        {<button onClick={ResetTheClock}>Reset</button>}
      </div>
    </div>
  );
}
// function Solution() {
//   const [time, setTime] = useState(0);
//   const [timerOn, setTimerOn] = useState(false);

//   useEffect(() => {
//     let interval = null;

//     if (timerOn) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 10);
//       }, 10);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [timerOn]);

//   return (
//     <div className="setTimer">
//       <div>
//         <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
//         <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
//         <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
//       </div>
//       <div className="buttonFlex">
//         {!timerOn && time === 0 && (
//           <button onClick={() => (timerOn ? {} : setTimerOn(true))}>
//             Start
//           </button>
//         )}
//         {timerOn && <button onClick={() => setTimerOn(false)}>Pause</button>}
//         {!timerOn && time !== 0 && (
//           <button onClick={() => setTimerOn(true)}>Resume</button>
//         )}
//         {!timerOn && time !== 0 && (
//           <button onClick={() => setTime(0)}>Reset</button>
//         )}
//       </div>
//     </div>
//   );
// }
export default Solution;
