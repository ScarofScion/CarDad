import React from "react";

const Img = props => (
  <li className="gif-wrap">
    {console.log("Img's array data: ", props)}
    <h1>{props.url}</h1>
    {/* <img src={props} alt="" /> */}
  </li>
);

export default Img;
