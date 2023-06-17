import * as React from "react"
import {useState, useEffect} from "react"
import axios from "axios"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"
import Sidebar from "../Sidebar/Sidebar"

export default function App() {

// Creating the useStates needed for this website
const [products, setProducts] = useState([])
const [isFetching, setIsFetching] = useState(false)
const [error, setError] = useState(null)
const [shoppingCart, setShoppingCart] = useState([])
const [currentCategory, setCurrentCategory] = useState("All Categories")
const [searchValue, setSearchValue] = useState("")

  //function to change the searchvalue a user does
const handleSearchValueChange = (event) => {
  event.preventDefault()
  setSearchValue(event.target.value)
}


// get API data
useEffect(() => {
  const fetchProducts = async () => {
    setIsFetching(true)
  axios.get('https://codepath-store-api.herokuapp.com/store').then((response) => {
    setProducts(response.data.products)
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    setIsFetching(false)
})
  }
  fetchProducts()
}, []);
console.log(products)
// returning the different main children component of the app parent with the necesary props.
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element =
         {<Home 
         error = {error}
         products = {products}
         setProducts = {setProducts}
         currentCategory = {currentCategory}
         setCurrentCategory = {setCurrentCategory}
         searchValue = {searchValue}
         handleSearchValueChange = {handleSearchValueChange} 
         shoppingCart = {shoppingCart}
         setShoppingCart = {setShoppingCart}
         />}>

         </Route>
        <Route path = "/products/:productID" element= {<ProductDetail 
        products = {products}
        isFetching = {isFetching}
        setIsFetching = {setIsFetching}
        setProducts = {setProducts}
        currentCategory = {currentCategory}
      setCurrentCategory = {setCurrentCategory}
      handleSearchValueChange = {handleSearchValueChange}
      searchValue = {searchValue}
      shoppingCart = {shoppingCart}
         setShoppingCart = {setShoppingCart}/>} 
      />
      </Routes>
      </BrowserRouter>
      <Sidebar shoppingCart = {shoppingCart}/>
    </div>
  )
}
