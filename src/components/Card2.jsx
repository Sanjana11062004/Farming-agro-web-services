import React from "react";
import filter from "../assets/images/filter.png"

function Card2(){
    return(
        <div >
            <div className="section1">
                <p className="heading">Products available in your location</p> 
            </div>
            <div className="grey-buttons">
                <button>Filter    <span><img width={20} height={20} src={filter}></img></span></button>
                <button>Sort By</button>
                {/* <button>Fast Delivery</button> */}
                <button>Ratings 4.0+</button>
                {/* <button>Pure Veg</button> */}
                <button>Offers</button>
                <button>Rs. 300-Rs. 600</button>
                <button>Less than Rs. 300</button>
            </div>
        </div>
    )
}

export default Card2;