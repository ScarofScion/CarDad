import React from "react";
import Img from "./Img";

const ImgList = props => {
  const arraylist = props.array;
  console.log("props.array: ", props.array, "arrayList: ", arraylist);
  let links = arraylist.map(number => <Img url={number} />);

  return (
    <ul className="img-list">
      <h1>List will be here</h1>
      {links}
    </ul>
  );
};

export default ImgList;
