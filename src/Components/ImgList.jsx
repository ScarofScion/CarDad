import React from "react";
import Img from "./Img";

const ImgList = props => {
  const results = props.data.urls;
  console.log("results", results);
  let links = results.map(img => <Img url={img} />);
  console.log(links);
  return (
    <ul className="img-list">
      <h1>List will be here</h1>
      {/* {links} */}
    </ul>
  );
};

export default ImgList;
