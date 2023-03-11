import React from "react";
import { FaClock } from 'react-icons/fa'

let Conteo = 0;

const SecondsCounter = () => {
  console.log(Conteo);
  Conteo++;

  return (
    <div className="counter">
      <div >
        <FaClock className="clock" />
      </div>

      {/* -------------------  Horas  ----------------------------*/}
      <div className="Display">
        {Math.floor(Conteo / 100000) % 10}
      </div>
      <div className="Display">
        {Math.floor(Conteo / 10000) % 10}
      </div>

      {/*---------------------  Minutos  -------------------------*/}
      <div className="Display">
        {Math.floor(Conteo / 1000) % 10}
      </div>
      <div className="Display">
        {Math.floor(Conteo / 100) % 10}
      </div>

      {/*---------------------  Segundos  -------------------------*/}
      <div className="Display">
        {Math.floor(Conteo / 10) % 10}
      </div>
      <div className="Display">
        {Math.floor(Conteo / 1) % 10}
      </div>
    </div>
  );
}

export default SecondsCounter;