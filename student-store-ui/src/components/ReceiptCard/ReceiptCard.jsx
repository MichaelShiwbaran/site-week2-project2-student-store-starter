import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import "./ReceiptCard.css";

const ReceiptCard = (props) => {
  console.log(props.receipt);
  return (
    <div className="receipt-card">
      <Navbar />
      <Hero />
      <table>
        <tr>
          <th>Name: </th>
          <th>Email: </th>
          <th>Date: </th>
          <th>Time: </th>
        </tr>
        <tr>
          <th>{props.receipt.name}</th>
          <th>{props.receipt.email}</th>
          <th>{props.receipt.date}</th>
          <th>{props.receipt.time}</th>
          {props.receipt.shoppingCart.map((product, index) => (
            <table>
              <tr>
                <th>Item: </th>
                <th>Price: </th>
                <th>Total Cost: </th>
              </tr>
              <tr>
                <th>{product.productName}</th>
                <th>{product.productPrice}</th>
                <th>{product.productCost}</th>
              </tr>
            </table>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default ReceiptCard;
