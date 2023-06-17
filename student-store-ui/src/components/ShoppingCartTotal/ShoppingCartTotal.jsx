import React from 'react'

const ShoppingCartTotal = (props) => {
let totalCost = 0
let subTotal = 0
props.shoppingCart.map((element) => {
    subTotal += element.productCost
})
console.log(totalCost)
totalCost = subTotal * 1.05

  return (
    <div>
        <h1>Subtotal Cost: {subTotal.toFixed(2)} </h1>
        <h1>Total Cost: {totalCost.toFixed(2)}</h1>
    </div>
  )
}

export default ShoppingCartTotal
