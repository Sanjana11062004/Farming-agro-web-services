import React from "react";
import Pizza from "../assets/images/Pizza.png";
import dosa from "../assets/images/dosa.png";
import star from "../assets/images/star.png";

function Items(props) {
  return (
    <div className="body-image-container">
      <div className="body-image-container-anchor">
        <div className="body-image-container-1">
          <img className="body-image-container-pic" src={props.image}></img>
          <div className="centered">{props.imgoffer}</div>
        </div>
        <div className="body-image-container-2">
          <span className="body-image-container-text">{props.resname}</span>
          <div className="body-image-container-3">
            <img src={star} width={18} height={18}></img>
            <span className="body-image-container-text-1">
              {props.rating} &#8226; {props.delivery}
            </span>
            <br></br>
          </div>
          <span className="body-image-container-text-2">
            {props.variety}
            <br></br>
            {props.area}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Items;
