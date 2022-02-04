import React from "react";

function MagicNumber() {
  let x = Math.floor(Math.random() * 1235);
  return (
    <div>
      <h3>The magic number is: {x}</h3>
    </div>
  );
}

export default MagicNumber;
