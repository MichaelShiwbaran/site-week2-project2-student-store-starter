import React from 'react'

const ShoppingCartInfo = (props) => {
    console.log(props.product)
  return (
    <div className='shopppingcart-info'>
            <h3>Item: {props.product.productName}</h3>
            <h3>Amount: {props.product.itemCount}</h3>
            <h3>Price: {props.product.productPrice}</h3>
            <h3>Cost: {props.product.productCost}</h3>
    </div>  
  )
}

export default ShoppingCartInfo
