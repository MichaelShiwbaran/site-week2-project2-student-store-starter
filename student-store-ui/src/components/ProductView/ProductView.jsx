import React, {useEffect , useState} from 'react'
import "./ProductView.css"
import axios from 'axios'
import {useParams} from "react-router-dom"
import AddToShoppingCart from '../AddToShoppingCart'
import RemoveFromShoppingCart from '../RemoveFromShoppingCart'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

const ProductView = (props) => {
  let shopping_cart = props.shoppingCart
  let setShopping_cart = props.setShoppingCart
 const [newItemCount, setNewItemCount] = useState(0)
  console.log(props.product)
  useEffect(() => {
    const fetchProducts = async () => {
      props.setIsFetching(true)
    axios.get('https://codepath-store-api.herokuapp.com/store').then((response) => {
      props.setProducts(response.data.products)
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      props.setIsFetching(false)
  })
    }
    fetchProducts()
  }, []);
  const {productID} = useParams()
  console.log(productID)
  let correctProduct = []
  props.product.filter((product) => {
      console.log(product.id == productID)
      product.id == productID? correctProduct.push(product): null
  })
  correctProduct = correctProduct[0]
  console.log(correctProduct)
  if (props.product.length !== 0){

    let product = props.product.filter((element, index) => 
          element.id == productID
    )
    product = product[0]
  
    return (
      <div>
      <div className='product-view'>

        <h1 className='product-id'>{`Product #: ${correctProduct.id}`}</h1>
      </div>
      <div className='product-view-card'>
        <div className='product-card'>
          <div className='media'>
            <a href={`/products/${correctProduct.id}`}>
              <img src={correctProduct.image}/>
            </a>
          </div>
          <div className='product-info'>
            <div className='main-info'>
              <p className='product-name'>{correctProduct.name}</p>
              <p className='product-price'>{correctProduct.price}</p>
            </div>
            <div className='desc'>
              <p className='product-description'>{correctProduct.description}</p>
            </div>
          </div>
          <div className='actions'>
          <div className='buttons'>
            <button className='add' onClick={(event) => AddToShoppingCart(
              event,
              newItemCount,
              setNewItemCount,
              props.setShoppingCart,
              props.shoppingCart,
              correctProduct
            )}>
              <i className='material-icons'>add</i>
            </button>
            <button className='remove' onClick={(event) => {newItemCount > 0 && RemoveFromShoppingCart(
              event,
              newItemCount,
              setNewItemCount,
              props.setShoppingCart,
              props.shoppingCart,
              correctProduct
            )}}>
              <i className='material-icons'>remove</i>
            </button>
          </div>
        </div>
        </div>
      </div>
      </div>

    )
  }
}

export default ProductView
