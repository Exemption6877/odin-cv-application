import { useState } from "react";
import "./Drag.module.css";

// Rotate it with animation

const arrowUp = "/icons/arrow_up.svg";
const arrowDown = "/icons/arrow_down.svg";

function Drag() {
  return (
    <>
      <button>
        <img src={arrowUp} />
      </button>
    </>
  );
}

export default Drag;
