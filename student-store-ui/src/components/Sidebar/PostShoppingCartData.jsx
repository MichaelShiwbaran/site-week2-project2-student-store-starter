import React, { useEffect } from "react";
import axios from "axios";

const PostShoppingCartData = async (shoppingCart, name, email) => {
  const addShoppingCartData = async () => {
    try {
      const response = await axios.post("http://localhost:3001", {
        shoppingCart: shoppingCart,
        name: name,
        email: email,
      });
      //   setShoppingCart([...shoppingCart, response.data])
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  addShoppingCartData();
  return <></>;
};

export default PostShoppingCartData;
