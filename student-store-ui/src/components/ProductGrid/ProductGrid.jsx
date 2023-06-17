import React from 'react'
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"
import ProductView from '../ProductView/ProductView'

const ProductGrid = (props) => {
  console.log(props.shoppingCart)
  return (
    <div id = "ProductGrid" className='product-grid'>
    <div className='content'>
      <h3>Best Selling Products</h3>
      <div className='productgrid'>
        {props.products.map((product) => (
          <ProductCard 
          key = {product.id}
          product = {product}
          setProductData = {props.setProductData}
          shoppingCart = {props.shoppingCart}
          setShoppingCart = {props.setShoppingCart}
          />
        ))}
    </div>
  </div>
  </div>
  )
}

export default ProductGrid
