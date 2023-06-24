import React from "react";
import { useState } from "react";
import "./ViewPurchases.css";
import ProductView from "../ProductView/ProductView";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import SubNavBar from "../SubNavbar/SubNavBar";

const ViewPurchases = (props) => {
  const [searchValue, setSearchValue] = useState("");
  let receipts;
  let oneReceipt;
  receipts = props.viewAllReceipts;

  const handleSearchValueChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const currentProducts = Boolean(searchValue)
    ? receipts.filter(
        (receipts, index) =>
          receipts[index + 1].email
            .toLowerCase()
            .indexOf(searchValue.toLowerCase()) !== -1
      )
    : receipts;

  return (
    <div className="view-purchases">
      <Navbar />
      <Hero />
      <br />
      <br />
      <h1>All Purchases:</h1>
      <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={searchValue}
          onChange={(event) => handleSearchValueChange(event)}
        />
        <i className="material-icons"> search</i>
      </div>
      {currentProducts.map(
        (receipt, index) => (
          (oneReceipt = receipt),
          (index = index + 1),
          (
            <div className="receipt-info">
              <table>
                <tr>
                  <th>Name: </th>
                  <th>Email: </th>
                  <th>Item: </th>
                  <th>Amount: </th>
                  <th>Price: </th>
                  <th>Cost: </th>
                </tr>
                <tr>
                  <th>{oneReceipt[index].name}</th>
                  <th>{oneReceipt[index].email}</th>
                  <th>{oneReceipt[index].shoppingCart[0].productName}</th>
                  <th>{oneReceipt[index].shoppingCart[0].itemCount}</th>
                  <th>{oneReceipt[index].shoppingCart[0].productPrice}</th>
                  <th>{oneReceipt[index].shoppingCart[0].productCost}</th>
                </tr>
                <br />
                <br />
              </table>
            </div>
          )
        )
      )}
    </div>
  );
};

export default ViewPurchases;
