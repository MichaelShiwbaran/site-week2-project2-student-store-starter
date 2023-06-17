import React from 'react'
import "./ProductDetail.css"
import ProductView from '../ProductView/ProductView'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import SubNavBar from '../SubNavbar/SubNavBar'

const ProductDetail = (props) => {
  console.log(props.products)
  console.log(props.setIsFetching)
  
  return (
    <div className='product-detail'>
          <Navbar />
          <Hero />
          <SubNavBar 
      currentCategory = {props.currentCategory}
      setCurrentCategory = {props.setCurrentCategory}
      handleSearchValueChange = {props.handleSearchValueChange}
      searchValue = {props.searchValue}
      />
          <ProductView 
          product = {props.products}
          setIsFetching = {props.setIsFetching}
          isFetching = {props.isFetching}
          setProducts = {props.setProducts}
          shoppingCart = {props.shoppingCart}
      setShoppingCart = {props.setShoppingCart}
          />
      </div>
  )
}

export default ProductDetail
