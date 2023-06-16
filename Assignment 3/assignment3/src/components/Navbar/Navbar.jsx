import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <h1>Assignment 3 - Unsplash</h1>
        <div className="navbar-content">
          <div className="navbar-button">
            <Link to={"/"} className="link">
              <p>Home</p>
            </Link>
          </div>

          <div className="navbar-button">
            <Link to={"/favorites"} className="link">
              <p>Favorites</p>
            </Link>
          </div>

        </div>

      </div>
    </>

  )
}

export default Navbar;