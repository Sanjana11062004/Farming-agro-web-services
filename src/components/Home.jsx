import React, { useState } from "react";
import "../styles/style.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Items from "../components/Items";
import Hr from "../components/Hr";
import Footer from "../components/Footer";
import ContentBig from "../components/ContentBig";
import Content from "../components/Content";
import dosa from "../assets/images/dosa.png";
import icecream from "../assets/images/icecream.png";
import snad from "../assets/images/snad.jpeg";
import mm from "../assets/images/mm.jpeg";
import palam from "../assets/images/palam.jpeg";
import pixxa from "../assets/images/pixxa.jpeg";
import sweet from "../assets/images/sweet.jpeg";
import legpiece from "../assets/images/legpiece.jpeg";
import brhbiriyani from "../assets/images/brhbiriyani.jpeg";
import samosabw from "../assets/images/samosabw.jpeg";
import pizzaland from "../assets/images/pizzaland.jpeg";
import paneer from "../assets/images/paneer.jpeg";
import itly from "../assets/images/itly.png";
import juice from "../assets/images/juice.jpeg";
import dosa2 from "../assets/images/dosa2.jpeg";
import ibaco from "../assets/images/ibaco.jpeg";
import Offers from "../components/Offers";
import offer1 from "../assets/images/offer1.png";
import offer2 from "../assets/images/offer2.png";
import { Link } from "react-router-dom";
import Dish from "./Dish";
import FooterMob from "./FooterMob";
import HeaderMob from "./HeaderMob";
import dhal from "../assets/images/dhal.png"

function Home() {
  const [offers, setOffers] = useState([offer1, offer2]);
  const nextPage = () => {
    return <Link to="/dish">next</Link>;
  };
  const [cuisine, setCuisine] = useState([
    "Italian",
    "Chinese",
    "Mexican",
    "Indian",
    "North Indian",
    "South Indian",
    "Japanese",
    "Thai",
    "Mediterranean",
    "French",
    "Greek",
    "Vietnamese",
    "Spanish",
    "Korean",
    "American",
    "Brazilian",
    "Lebanese",
    "Turkish",
    "Caribbean",
    "Moroccan",
    "Russian",
    "German",
  ]);
  const [cities, setCities] = useState([
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Surat",
  ]);
  return (
    <div>
      <Header></Header>
      <HeaderMob></HeaderMob>
      <div className="main">
        <p className="heading margin-next-head">Best offers for you</p>
        {/* <div className=" app-div offers-app">
          {offers.map((i, index) => (
            <Offers key={index} offers={i}></Offers>
          ))}
        </div> */}

        {/* <Card></Card> */}
        <Card2></Card2>

        <div className="app-div content-gap">
         <Link to="/dish">
            <Items
              onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
         </Link>
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         {/* <Link to="/dish"> */}
         <Items
              // onClick={nextPage}
              image={dhal}
              // imgoffer="ITEM AT 129"
              resname="Mung Bean"
              rating="4.3"
              delivery="2 days"
              variety="Pulses"
              area="Saravapatti"
            ></Items>
          {/* </Link> */}
         
          
          
        </div>
      </div>
      <div className="main2">
        <Hr></Hr>
      </div>
      {/* <div className="main2-content">
        <p className="heading-main2 margin-next-head-main2">
          Best Places to Eat Across Cities
        </p>
        <div className="cont-flex">
          {cities.map((i, index) => (
            <Content key={index} main={"Best Restaurant in"} title={i}></Content>
          ))}
        </div>
      </div> */}
      {/* <div className="main2-content">
        <p className="heading-main2 margin-next-head-main2">
          Best Cuisines Near Me
        </p>
        <div className="cont-flex">{cuisine.map((i,index)=>(
          <Content key={index} main={i} title={"Restaurant Near Me"}></Content>
        ))}</div>
      </div> */}
      <div className="main2-content">
        <p className="heading-main2 margin-next-head-main2">
          Explore Every Products Near Me
        </p>
        <div className="cont-flex">
          <ContentBig name={"Explore Products Near Me"}></ContentBig>
          <ContentBig name={"Explore Top Rated Products Near Me"}></ContentBig>
        </div>
      </div>
      <div className="gapbtw"></div>
      <Footer></Footer>
      <FooterMob></FooterMob>
      
    </div>
  );
}

export default Home;
