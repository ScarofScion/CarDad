import React from "react";

const Img = props => (
  <li className="gif-wrap">
    {console.log("Img's array data: ", props)}

    <img src={props.url} alt="" />
  </li>
);

export default Img;
