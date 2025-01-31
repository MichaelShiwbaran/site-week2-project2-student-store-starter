import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./App.css";
import Sidebar from "../Sidebar/Sidebar";
import ViewPurchases from "../ViewPurchases/ViewPurchases";
import GetAllReceipts from "../Sidebar/GetAllReceipts";
import ReceiptDetails from "../ReceiptDetails/ReceiptDetails";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  const [searchValue, setSearchValue] = useState("");
  const [viewAllReceipts, setViewAllReceipts] = useState([]);

  const handleSearchValueChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true);
      await axios
        .get("http://localhost:3001/")
        .then((response) => {
          setProducts(response.data.products);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsFetching(false);
        });
    };
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                error={error}
                products={products}
                setProducts={setProducts}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                searchValue={searchValue}
                handleSearchValueChange={handleSearchValueChange}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          ></Route>
          <Route
            path="/products/:productID"
            element={
              <ProductDetail
                products={products}
                isFetching={isFetching}
                setIsFetching={setIsFetching}
                setProducts={setProducts}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                handleSearchValueChange={handleSearchValueChange}
                searchValue={searchValue}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
          <Route path="/receipt/:date/:time" element={<ReceiptDetails />} />
          <Route
            path="/checkout"
            element={<ViewPurchases viewAllReceipts={viewAllReceipts} />}
          />
        </Routes>
        <Sidebar
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          viewAllReceipts={viewAllReceipts}
          setViewAllReceipts={setViewAllReceipts}
        />
      </BrowserRouter>
    </div>
  );
}
