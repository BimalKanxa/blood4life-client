import React from 'react'
import "./background.css"
//vactor images

import Backdrop1 from "../../../assets/vectors/back-drop1.png"
import Backdrop2 from "../../../assets/vectors/back-drop2.png";
import BloodCells from  "../../../assets/vectors/bloodcells.png"; 

function Backgraund() {
  return (
    <>
    <div className="background-images">
        <div className="backdrop1">
          <img src={Backdrop1} alt="" />
        </div>
        <div className="backdrop2">
          <img src={Backdrop2} alt="" />
        </div>
        <div className="backdrop3">
          <img src={Backdrop1} alt="" />
        </div>
        <div className="backdrop4">
          <img src={Backdrop1} alt="" />
        </div>
        <div className="blood-cells">
          <img src={BloodCells} alt="" />
        </div>
      </div>
    </>
  )
}

export default Backgraund
