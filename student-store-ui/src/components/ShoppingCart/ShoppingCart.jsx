import React from 'react'
import ShoppingCartInfo from '../ShoppingCartInfo/ShoppingCartInfo'

const ShoppingCart = (props) => {
  console.log(props.shoppingCart)
  return (
    <div className='shopping-cart'>
      {props.shoppingCart.map((element) => 
        
          <ShoppingCartInfo product = {element} />
      )}

    </div>
  )
}

export default ShoppingCart
