import React from "react";
import home from "../assets/images/home.png"
function Address(props){
    return(
        <div className="addr-main">
            <div>
                <img src={home} width={20} height={20}></img>
            </div>
            <div>
                <h5>{props.headName}</h5>
                <p>{props.address}</p>
                <h6>{props.time}</h6>
                <button>{props.button}</button>
            </div>
        </div>
    );
}

export default Address;