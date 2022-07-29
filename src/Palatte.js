import React from "react";
import ColorBoxes from "./ColorBoxes";
import "./palette.css";

function Palatte({ colors }) {
  console.log(colors[0].color, colors[0].name);
  const colorbox = colors.map((color) => (
    <ColorBoxes background={color.color} name={color.name} />
  ));
  return (
    <div className="palette">
      {/* Navbar goes here  */}
      <div className="palate-boxes">{colorbox}</div>
      {/* footer goes here */}
    </div>
  );
}

export default Palatte;
