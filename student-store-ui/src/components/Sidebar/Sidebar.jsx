import React from "react";
import "./Sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import PostShoppingCartData from "./PostShoppingCartData";
import GetShoppingReceipt from "./GetShoppingReceipt";
import GetAllReceipts from "./GetAllReceipts";
import ShoppingCartTotal from "../ShoppingCartTotal/ShoppingCartTotal";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar(props) {
  const [sidebar, setSidebar] = useState(false);
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [inputValues, setInputValues] = useState(false);
  const [purchases, setPurchases] = useState();
  const showSidebar = () => setSidebar(!sidebar);

  const handleNameChange = (event, name, setName) => {
    console.log(event.target.value);
    setName(event.target.value);
    console.log(name);
  };
  const handleEmailChange = (event, email, setEmail) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const handleInputValues = async (value, setInputValues) => {
    setInputValues(value);
  };

  const handleCheckout = async (
    event,
    shoppingCart,
    shoppingCartLength,
    setShoppingCart,
    purchases,
    setPurchases,
    name,
    email,
    setInputValues
  ) => {
    console.log("NAME", name);
    if (shoppingCartLength == 0) {
      return null;
    }
    if (!document.getElementById("checkbox").checked) {
      return null;
    }
    if (name.trim().length !== 0 && email.trim().length !== 0) {
      console.log(shoppingCart);
      await PostShoppingCartData(shoppingCart, name, email);
      await GetShoppingReceipt(setPurchases);
      console.log(purchases);
      setShoppingCart([]);
      await handleInputValues(true, setInputValues);
    } else {
      await handleInputValues(false, setInputValues);
    }
  };
  const handleViewPurchases = async (event, setViewAllReceipts) => {
    await GetAllReceipts(setViewAllReceipts);
  };
  return (
    <section className={sidebar ? `sidebar open` : `sidebar closed`}>
      <div className="wrapper">
        <button className="toggle-button button closed" onClick={showSidebar}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          <div className={sidebar ? "open" : `closed`}>
            <h3>
              Shopping Cart
              <span className="button">
                <i className="material-icons md-48">add_shopping_cart</i>
              </span>
            </h3>
            <div
              className={
                !sidebar ? `notification closed` : `notification open center`
              }
            >
              {props.shoppingCart.length < 1 && (
                <h3>No Items In Shopping Cart!</h3>
              )}
            </div>
            <div
              className={
                !sidebar ? `notification closed` : `notification open center`
              }
            >
              {props.shoppingCart.length > 0 && (
                <ShoppingCart shoppingCart={props.shoppingCart} />
              )}
            </div>
            <div
              className={
                !sidebar ? `notification closed` : `notification open `
              }
            >
              {props.shoppingCart.length > 0 && (
                <ShoppingCartTotal shoppingCart={props.shoppingCart} />
              )}
            </div>
            <div
              className={
                sidebar ? `checkout-form open` : `checkout-form closed`
              }
            >
              <h3>Payment Info</h3>
              <div className="input-field">
                <label name="name" className="label">
                  Name
                </label>
                <div className="control">
                  <input
                    name="name"
                    className="checkout-form-input"
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={(event) => handleNameChange(event, name, setName)}
                  />
                </div>
              </div>
              <div className="input-field">
                <label name="email" className="label">
                  Email
                </label>
                <div className="control">
                  <input
                    name="email"
                    className="checkout-form-input"
                    type="text"
                    placeholder="Student Email"
                    value={email}
                    onChange={(event) =>
                      handleEmailChange(event, email, setEmail)
                    }
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input
                      id="checkbox"
                      name="tersAndConditions"
                      type="checkbox"
                    />
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
                  <button
                    className="button checkout-button"
                    onClick={(event) =>
                      handleCheckout(
                        event,
                        props.shoppingCart,
                        props.shoppingCart.length,
                        props.setShoppingCart,
                        purchases,
                        setPurchases,
                        name,
                        email,
                        setInputValues
                      )
                    }
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            <div className="checkout-success">
              <h3>Checkout Info</h3>
              <div className="content">
                <p>
                  A confirmation email will be sent to you so that you can
                  confirm this order. Once you have confirmed the order, it will
                  be delivered to your dorm room.
                </p>
                {inputValues && purchases && (
                  <CheckoutForm
                    purchases={purchases}
                    name={name}
                    email={email}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={sidebar ? `checkout-form open` : `checkout-form closed`}
          >
            <Link to={`/checkout`}>
              <button className="button checkout-button">View Purchases</button>
            </Link>
          </div>
          <div className="cart-icons">
            <span className="cart-icon icon button">
              <span className="cart-icon icon button">
                <i
                  className={
                    sidebar
                      ? `material-icons md-48 closed`
                      : `material-icons md-48 open`
                  }
                >
                  add_shopping_cart
                </i>
              </span>
            </span>
            <span className="cart-icon icon button">
              <i
                className={
                  sidebar
                    ? `material-icons md-48 closed`
                    : `material-icons md-48 open`
                }
              >
                monetization_on
              </i>
            </span>
            <span className="cart-icon icon button">
              <i
                className={
                  sidebar
                    ? `material-icons md-48 closed`
                    : `material-icons md-48 open`
                }
              >
                fact_check
              </i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
