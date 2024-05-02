import React, { useState } from 'react';


const SellProducts = () => {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerNumber, setSellerNumber] = useState('');
  const [areaOfDelivery, setAreaOfDelivery] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement logic to submit the form data
    console.log({
      productName,
      productImage,
      sellerName,
      sellerNumber,
      areaOfDelivery,
      price,
      discount,
    });
  };

  return (
    <div className="sell-products-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label>Product Image URL:</label>
          <input
            type="text"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            
          />
        </div>
        <div className="input-field">
          <label>Seller Name:</label>
          <input
            type="text"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label>Seller Number:</label>
          <input
            type="tel"
            value={sellerNumber}
            onChange={(e) => setSellerNumber(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label>Area of Delivery in km:</label>
          <input
            type="text"
            value={areaOfDelivery}
            onChange={(e) => setAreaOfDelivery(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label>Discount:</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default SellProducts;
