import React from 'react'
import "./ShoppingCartInfo.css"

const ShoppingCartInfo = (props) => {
    console.log(props.product)
  return (
    <div className='shoppingcart-info'>
        <table>
            <tr>
            <th>Item: </th>
            <th>Amount: </th>
            <th>Price: </th>
            <th>Cost: </th>
            </tr>
            <tr>
            <th>{props.product.productName}</th>
            <th>{props.product.itemCount}</th>
            <th>{props.product.productPrice}</th>
            <th>{props.product.productCost}</th>
            </tr>
        </table>
    </div>  
  )
}

export default ShoppingCartInfo
