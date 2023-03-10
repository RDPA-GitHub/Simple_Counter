import React from "react";

let number = 0;
const SecondsCounter = () => {
  console.log(number);
  ++number;
  return (
    <div className="counter">
{/* -------------------  Horas  ----------------------------*/}
      <div className="minute">
        {Math.floor(number / 100000) % 10}
      </div>
      <div className="minute">
        {Math.floor(number / 10000) % 10}
      </div>

{/*---------------------  Minutos  -------------------------*/}
      <div className="minute">
        {Math.floor(number / 1000) % 10}
      </div>
      <div className="minute">
        {Math.floor(number / 100) % 10}
      </div>

{/*---------------------  Segundos  -------------------------*/}
      <div className="minute">
        {Math.floor(number / 10) % 10}
      </div>
      <div className="second">
        {Math.floor(number / 1) % 10}
      </div>
    </div>

  );

}

export default SecondsCounter;