import React from "react";
import "./ViewPurchases.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import GetAllReceipts from "../Sidebar/GetAllReceipts";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const ViewPurchases = (props) => {
  const [searchValue, setSearchValue] = useState("");
  console.log(props.viewAllReceipts);
  const { AllReceipts } = GetAllReceipts();
  const [receipts, setReceipts] = useState([]);
  console.log(AllReceipts);
  const handleSearchValueChange = (event) => {
    event.preventDefault();
    let userQuery = event.target.value;
    setSearchValue(event.target.value);
    const filteredreceipts = AllReceipts.filter(
      (receipt, index) =>
        receipt.email.toLowerCase().indexOf(userQuery.toLowerCase()) !== -1
    );
    console.log("TRUE TRUE TRU filtered receipts", filteredreceipts);
    setReceipts(filteredreceipts);
  };
  let list = searchValue ? receipts : AllReceipts;
  return (
    <div className="view-purchases">
      <Navbar />
      <Hero />
      <h1>All Purchases:</h1>
      <br />
      <br />
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
      {console.log(props.viewAllReceipts)}
      {console.log(receipts)}
      {list &&
        list.map(
          (receipt, index) => (
            (receipt = receipt),
            (index = index + 1),
            (
              <div className="receipt-info" key={index}>
                <Link
                  to={`/receipt/${receipt.date.replace(
                    /[^a-zA-Z0-9 ]/g,
                    ""
                  )}/${receipt.time.replace(/[^a-zA-Z0-9 ]/g, "")}`}
                >
                  <table>
                    <tr>
                      <th>Name: </th>
                      <th>Email: </th>
                      <th>Date: </th>
                      <th>Time: </th>
                    </tr>
                    <tr>
                      <th>{receipt.name}</th>
                      <th>{receipt.email}</th>
                      <th>{receipt.date}</th>
                      <th>{receipt.time}</th>
                    </tr>
                  </table>
                </Link>
              </div>
            )
          )
        )}
    </div>
  );
};
export default ViewPurchases;
