import * as React from "react"
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import SubNavBar from "../SubNavbar/SubNavBar"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar"

export default function Home(props) {

  const productsCategory = props.currentCategory.toLowerCase() !== "all categories"? 
  props.products.filter((product) => product.category === props.currentCategory.toLowerCase()) : props.products

  const currentProducts = Boolean(props.searchValue)? productsCategory.filter((products) =>
  products.name.toLowerCase().indexOf(props.searchValue.toLowerCase()) !== -1) : productsCategory



  return (
    <div className="home">
      <Navbar />
      <Hero />
      <SubNavBar 
      currentCategory = {props.currentCategory}
      setCurrentCategory = {props.setCurrentCategory}
      handleSearchValueChange = {props.handleSearchValueChange}
      searchValue = {props.searchValue}
      />
      
      <ProductGrid 
      products = {currentProducts}
      setProducts = {props.setProducts}
      shoppingCart = {props.shoppingCart}
      setShoppingCart = {props.setShoppingCart}
      isFetching = {props.isFetching}
      />
      <About />
      <Contact />
      <Footer />

    </div>
  )
}
