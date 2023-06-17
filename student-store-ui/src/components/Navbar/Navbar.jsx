import * as React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {

  // HTML and React tags needed for the Navbar section of the webpage
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <a href="/">
            <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="codepath logo" />
          </a>
        </div>
        <ul className="links">
          <li>
          <Link to = {"/"} >Home</Link>
          </li>
          <li>
            <a href="/#About">About Us</a>
          </li>
          <li>
            <a href = "/#Contact">Contact Us</a>
          </li>
          <li>
            <a href = "/#ProductGrid">Buy Now</a>
          </li>
        </ul>     
        </div>
    </nav>
  )
}
