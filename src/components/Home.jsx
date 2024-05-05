import React, { useState, useEffect } from 'react';
import "../styles/style.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Items from "../components/Items";
import Hr from "../components/Hr";
import Footer from "../components/Footer";
import ContentBig from "../components/ContentBig";
import Content from "../components/Content";
import { Link } from "react-router-dom";
import dhal from "../assets/images/dhal.png";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:5002/getProducts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <div>
      <Header></Header>

      <div className="main" style={{marginTop:"10%"}}>
        <p className="heading margin-next-head">Best offers for you</p>
        <Card2></Card2>

        <div className="app-div content-gap">
          {products.map((product, index) => (
            <Link key={index} to="/dish">
              <Items
                image={dhal}
                resname={product.productName}
                rating="4.3"
                delivery="2 days"
                variety="Pulses"
                area={product.areaOfDelivery}
              ></Items>
            </Link>
          ))}
        </div>
      </div>

      <div className="main2">
        <Hr></Hr>
      </div>

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
    </div>
  );
}

export default Home;
