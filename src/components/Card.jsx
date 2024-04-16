import React from "react";
import arrow from "../assets/images/arrow.png"
import rarrow from "../assets/images/rarrow.png"
import biriyani from "../assets/images/biriyani.png"
import Parotta from "../assets/images/Parotta.png"
import momos from "../assets/images/Momos.png"
import { Link } from "react-router-dom";
import Appam from "../assets/images/Appam.png"
import Burger from "../assets/images/Burger.png"
import Chinese from "../assets/images/Chinese.png"
import Idli from "../assets/images/Idli.jpeg"
import Pizza from "../assets/images/Pizza.png"
import Pongal from "../assets/images/Pongal.png"
import Poori from "../assets/images/Poori.png"
import rools from "../assets/images/rools.png"
import Shawarma from "../assets/images/Shawarma.png"
import Puttu from "../assets/images/Puttu.png"
import Sandwich from "../assets/images/Sandwich.png"
import Vada from "../assets/images/Vada.png"
import Paniyaram from "../assets/images/Paniyaram.png"
import Samosas from "../assets/images/Samosas.png"

function Card() {
  const scrollLeft = () => {
    const container = document.querySelector(".pictures-section1");
    container.scrollLeft -= 100; // Adjust the scroll amount as needed
  };

  const scrollRight = () => {
    const container = document.querySelector(".pictures-section1");
    container.scrollLeft += 100; // Adjust the scroll amount as needed
  };
  return (
    <div>
      <div className="section1">
        <p className="heading">Sanjana. what's on your mind?</p>
        <div className="arrow">
            <button type="button" className="btn btn-primary" onClick={scrollLeft} style={{borderRadius:"200px",backgroundColor:"gray","border":"none"}}><img src={arrow} alt="arrow" width={12}></img></button>
            <button type="button" className="btn btn-primary" onClick={scrollRight} style={{borderRadius:"200px",backgroundColor:"gray","border":"none"}}><img src={rarrow} alt="arrow" width={12}></img></button>
            
        </div> 
      </div>
      <div className="pictures-section1">
        <Link to=""><img src={biriyani} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Appam} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Burger} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Chinese} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Idli} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Pizza} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Parotta} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={momos} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Pongal} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Poori} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={rools} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Shawarma} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Paniyaram} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Sandwich} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Vada} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Samosas} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={Puttu} width={144} height={180} alt="image"></img></Link>
      </div>
      <hr></hr>
    </div>
  );
}

export default Card;
