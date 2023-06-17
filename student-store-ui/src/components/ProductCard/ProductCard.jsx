import React, {useState} from 'react'
import "./ProductCard.css"
import AddToShoppingCart from "../AddToShoppingCart.jsx"
import RemoveFromShoppingCart from '../RemoveFromShoppingCart.jsx'
import ProductDetail from "../ProductDetail/ProductDetail"

const ProductCard = (props) => {
console.log(props.itemCount)
const [itemCount, setItemCount] = useState(0)

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
            <button className='add' onClick={(event) => {AddToShoppingCart(
              event,
              itemCount,
              setItemCount,
              props.shoppingCart,
              props.setShoppingCart,
              props.product
              )}}>
              <i className='material-icons'>add</i>
            </button>
            <button className='remove' onClick={(event) => {RemoveFromShoppingCart(
              event,
              itemCount,
              setItemCount,
              props.shoppingCart,
              props.setShoppingCart,
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
