import * as React from "react"
import "./Sidebar.css"
import {useState} from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import ShoppingCartTotal from "../ShoppingCartTotal/ShoppingCartTotal"

export default function Sidebar(props) {

  //use state to effect the way items are shown in the side bar
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <section className={sidebar? `sidebar open` : `sidebar closed`}>
      <div className="wrapper">
        <button className="toggle-button button closed" onClick={showSidebar}>
          <i className="material-icons md-48">arrow_forward</i> 
        </button>
        <div className="shopping-cart">
          <div className={sidebar? 'open' : `closed`}>
            <h3>Shopping Cart
              <span className="button">
                <i className="material-icons md-48">add_shopping_cart</i>
              </span>
            </h3>
            <div className={!sidebar? `notification closed` : `notification open`}>
            <ShoppingCart shoppingCart = {props.shoppingCart}/>
            </div>
            <div className={!sidebar? `notification closed` : `notification open`}>
            <ShoppingCartTotal shoppingCart = {props.shoppingCart}/>
            </div>
            <div className={sidebar? `checkout-form open` : `checkout-form closed`}>
              <h3>Payment Info</h3>
            <div className="input-field">
              <label className="label">Name</label>
              <div className="control">
              <input name="name" class="checkout-form-input" type="text" placeholder="Student Name" value=""/>
              </div>
            </div>
            <div className="input-field">
              <label className="label">Email</label>
              <div className="control">
              <input name="email" class="checkout-form-input" type="text" placeholder="Student Email" value=""/>
              </div>
              </div>
              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input name="tersAndConditions" type="checkbox"/>
                      <span className="label">
                        I agree to the
                        <a href="#terms-and-conditions"> terms and conditions</a>
                      </span>
                  </label>
                </div>
              </div>
              <p className="is-danger"></p>
              <div className="field">
                <div className="control">
                  <button className="button checkout-button">Checkout</button>
                </div>
              </div>
            </div>
            <div className="checkout-success">
              <h3>Checkout Info</h3>
              <div className="content">
                <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the
order, it will be delivered to your dorm room.</p>
              </div>
            </div>
          </div>
          <div className="cart-icons">
            <span className="cart-icon icon button">
            <span className="cart-icon icon button">
              <i className={sidebar? `material-icons md-48 closed` : `material-icons md-48 open`}>add_shopping_cart</i></span>
            </span>
            <span className="cart-icon icon button">
              <i className={sidebar? `material-icons md-48 closed` : `material-icons md-48 open`}>monetization_on</i>
              </span>
              <span className="cart-icon icon button">
                <i className={sidebar? `material-icons md-48 closed` : `material-icons md-48 open`}>fact_check</i>
                </span>
          </div>
        </div>
      </div>

    </section>
  )
}
