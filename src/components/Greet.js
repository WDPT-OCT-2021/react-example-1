import React from "react";

function Greet(props) {
  console.log("This is props for Greet", props);
  return (
    <div>
      <h1>Hello, my name is {props.name}</h1>
      <p style={{ color: props.favColor }}>
        My favorite color is {props.favColor}
      </p>
      {props.car && <p>I drive a {props.car.make}</p>}
      <p>I {props.likesCoding ? "really" : `don't`} like coding!</p>
    </div>
  );
}

export default Greet;
