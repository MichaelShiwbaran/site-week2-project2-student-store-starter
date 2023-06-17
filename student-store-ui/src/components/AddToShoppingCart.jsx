import React from 'react'

const AddToShoppingCart = (
    event,
    itemCount,
    setItemCount,
    setShoppingCart,
    shoppingCart,
    product) => {

        console.log('shoppingcart:', shoppingCart)
  console.log(` event.target.value: ${event.target.value} setShoppingCart: ${setShoppingCart} product: ${product}`)
  const productPrice = product.price
  const productName = product.name
  let productCost
  if (itemCount > 0){
    productCost =  product.price * itemCount
  }else{
    productCost = product.price
  }
  console.log(productName)
  let checkProductInCart = shoppingCart.filter((product, index) => product.productName == productName )
  console.log('checkProductInCart:', checkProductInCart)
  if (checkProductInCart.length !== 0 ){
    console.log('if conding in addtoshoppignCart was hit', true)
    checkProductInCart = checkProductInCart[0]
    checkProductInCart.itemCount +=1
    checkProductInCart.productCost += productCost
    let updatedShoppingCart = shoppingCart.slice()
    let productInCartIndex
    shoppingCart.filter((product, index) => product.name == productName? productInCartIndex = index: "")
    console.log('product location in shopping cart:' ,productInCartIndex)
    updatedShoppingCart[productInCartIndex] = checkProductInCart
    // const updatedShoppingCart = shoppingCart.map((product,index) => {
    //     if (index === productInCartIndex){
    //         product.itemCount += 1
    //         product.productCost *= itemCount
    //         return product
    //     }else{
    //         return product
    //     }
    // })
    console.log('updated shopping cart',updatedShoppingCart)
    setShoppingCart(updatedShoppingCart)
    // productInCart = shoppingCart.filter((product) => product.name === productName)
    // productIncart.itemCount +=1
    // productInCart.Cost *= itemCount
  }else{
    console.log('else condition in shoppingCart was hit', true)
    const itemObject = {
        itemCount: itemCount +1,
        productName: productName,
        productPrice: productPrice,
        productCost: productCost
    }
    let copyShoppingCart = shoppingCart.slice()
    copyShoppingCart.push(itemObject)
    setShoppingCart(copyShoppingCart)
  }
  setItemCount(itemCount+1)
  console.log(`product price: ${productPrice} product Name: ${productName}`)
  console.log('Shopping cart', shoppingCart, 'item count', itemCount )

  return (
    <div>AddToShoppingCart</div>
  )
}

export default AddToShoppingCart
