import React from "react";

const Img = props => (
  <li className="gif-wrap">
    {console.log("Img's array data: ", props)}
<<<<<<< HEAD

=======
    <h1>{props.url}</h1>
>>>>>>> origin/fix-cat-images
    <img src={props.url} alt="" />
  </li>
);

export default Img;
