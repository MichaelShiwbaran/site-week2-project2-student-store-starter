import React, { useState } from 'react'
import "./SubNavBar.css"

const SubNavBar = (props) => {

    // useState to affect the way elements are shown
const [isShown, setisShown] = useState(true)
const toggleShown = () => {
    setisShown((isShown) => setisShown(!isShown))
}

  return (
    <nav className='sub-navbar'>
        <div className='content'>
            <div className='row'>
                <div className='search-bar'>
                    <input type="text" name='search' placeholder='Search' value = {props.searchValue} onChange={ (event) => props.handleSearchValueChange(event)}/>
                    <i className="material-icons"> search</i>
                </div>
            <div className = "links">
                <span className = "help">
                    <i className="material-icons">help</i>
                    Help
                </span>
                <div className='cart'>
                    <a href='/' >
                        My Cart
                        <i className='material-icons'>shopping_cart</i>
                    </a>
                    </div>
                </div>
                </div>
                <div className='row'>
                    <div className='hamburger-menu'>
                        <i className='material-icons' onClick={() => toggleShown()}>menu</i>
                    </div>
                    <ul className={`category-menu ${isShown? 'open': 'closed'}`}>
                    {["All Categories", "Clothing", "Food", "Accessories", "Tech"].map((cat) => ( //maps though th array of categories and sets the category to the one the user clicked on
              <li className={props.currentCategory === cat ? "is-active" : ""} key={cat}>
                <button onClick={() => props.setCurrentCategory(cat)}>{cat}</button>
              </li>
            ))}
                    </ul>
                </div>
        </div>
    </nav>
    
  )
}

export default SubNavBar
