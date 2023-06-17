import React from 'react'
import ShoppingCartInfo from '../ShoppingCartInfo/ShoppingCartInfo'

const ShoppingCart = (props) => {
  console.log(props.shoppingCart)
  // iterates through the shopping cart array and prints out the info for each item in the cart
  return (
    <div className='shopping-cart'>
      {props.shoppingCart.map((element) => 
        
          <ShoppingCartInfo product = {element} />
      )}

    </div>
  )
}

export default ShoppingCart
