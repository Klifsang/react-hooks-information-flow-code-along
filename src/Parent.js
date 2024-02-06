import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const changeColor = ()=>{
    setColor(getRandomColor())
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor = {changeColor}/>
      <Child onChangeColor = {changeColor}/>
    </div>
  );
}

export default Parent;
