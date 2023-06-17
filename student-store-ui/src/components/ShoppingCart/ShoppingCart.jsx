import React from 'react'
import ShoppingCartInfo from '../ShoppingCartInfo/ShoppingCartInfo'
import "./ShoppingCart.css"

const ShoppingCart = (props) => {
  console.log(props.shoppingCart)
  return (
    <div className='shopping-cart'>
      {props.shoppingCart.map((element, index) => 
        
          <ShoppingCartInfo key = {index} product = {element} />
      )}

    </div>
  )
}

export default ShoppingCart