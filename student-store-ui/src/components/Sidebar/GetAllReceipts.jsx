import React, { useEffect, useState } from "react";
import axios from "axios";
const GetAllReceipts = () => {
  const [AllReceipts, setAllReceipts] = useState([]);
  const addShoppingCartData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/allProducts");
      console.log(response.data);
      setAllReceipts(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    addShoppingCartData();
  }, []);
  return {
    AllReceipts,
  };
};
export default GetAllReceipts;
