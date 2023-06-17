import React, {useState} from 'react'
import "./ProductCard.css"
import AddToShoppingCart from "../AddToShoppingCart.jsx"
import RemoveFromShoppingCart from '../RemoveFromShoppingCart.jsx'

const ProductCard = (props) => {
console.log(props.itemCount)
  // usestate to keep track of the number of items needed for shopping cart
const [itemCount, setItemCount] = useState(0)

  // using the props passed into this file to print out the necessary information for each product
  return (
    <div className='product-card'>
      <div className='picture'>
        <a href={`/products/${props.product.id}`}>
        {props.product.image? <img src={props.product.image} alt='productimage' /> : null}
        </a>
      </div>
      <div className='product-info'>
        <div className='info'>
          <p className='product-name'>{props.product.name}</p>
          <p className='product-price'>{props.product.price}</p>
        </div>
        <div className='actions'>
          <div className='buttons'>
            <button className='add' onClick={(event) => {AddToShoppingCart( // the add button puts this product into the shopping cart
              event,
              itemCount,
              setItemCount,
              props.setShoppingCart,
              props.shoppingCart,
              props.product
              )}}>
              <i className='material-icons'>add</i>
            </button>
            <button className='remove' onClick={(event) => { itemCount > 0 && RemoveFromShoppingCart( // the remove button removes this product from the shopping cart
              event,
              itemCount,
              setItemCount,
              props.setShoppingCart,
              props.shoppingCart,
              props.product
              )}}>
              <i className='material-icons'>remove</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
