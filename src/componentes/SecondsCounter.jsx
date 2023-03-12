import React from "react";
import { FaClock } from 'react-icons/fa'

let Conteo = 0;
let Su = 0, Mu = 0, Md = 0, Hu= 0, Hd = 0;

const SecondsCounter = () => {
  console.log(Conteo);
  Conteo++;

          if (Conteo % 10 === 0) Su++;
          if (Su === 6){
            Su = 0;
            Md++;
          }
          if(Md === 10){
            Mu++;
            Md = 0;
          }
          if(Mu === 6){
            Mu = 0;
            Hd++;
          }
          if(Hd === 10){
            Hu++;
            Hd = 0;
          }
          if(Hu === 6) {
            Hu = 0;
            Hd = 0;
            Mu = 0;
            Md = 0;
            Su = 0;
            Conteo = 0;
          }
  
  return (
    <div className="counter">
      <div >
        <FaClock className="clock" />
      </div>

      {/* -------------------  Horas  ----------------------------*/}
      <div className="Display">
        {Hu}
      </div>
      <div className="Display">
        {Hd}
      </div>

      {/*---------------------  Minutos  -------------------------*/}
      <div className="Display">
        {Mu}
      </div>
      <div className="Display">
        {Md}
      </div>

      {/*---------------------  Segundos  -------------------------*/}
      <div className="Display">
        {Su}
      </div>
      <div className="Display">
        {Math.floor(Conteo / 1) % 10}
      </div>
    </div>
  );
}

export default SecondsCounter;