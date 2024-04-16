import React, { useEffect, useState } from "react";
import dishesdata from "../json/dishesdata.json";
import veg from "../assets/images/veg.png";

function Dishes({ addToCart }) {
  const [dis, setDis] = useState([]);

  useEffect(() => {
    setDis(dishesdata);
  }, []);

  // Empty dependency array means this effect runs only once on component mount

  return (
    <div>
      {dis.map((dis) => (
        <div key={dis.id}>
          <div className="flexx color">
            <div className="col">
              <div>
                <img src={veg} width={18}></img>
              </div>
              <div className="dishes-items">
                <p>{dis.name}</p>
              </div>
              <div className="dishes-items-price">
                <p>Rs.{dis.price}</p>
              </div>
              <div className="dishes-desc">
                <p>{dis.description}</p>
              </div>
            </div>
            <div className="image-food-add">
              <img
                className="dishes-image"
                src={dis.imageUrl}
                alt="dish-image"
                width={120}
                height={100}
              ></img>
              <button className="dishes-btn" onClick={()=> addToCart(dis.name,dis.price)}>
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dishes;
