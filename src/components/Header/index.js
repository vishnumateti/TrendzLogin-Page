// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header-container">
    <nav className="nav-container">
      <div className="sm-nav-container">
        <img
          className="navbar-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />
        <img
          className="logout-logo"
          alt="nav logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        />
      </div>
      <div className="home-products-cart-container">
        <img
          className="icons"
          alt="nav home"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
        />
        <img
          className="icons"
          alt="nav products"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
        />
        <img
          className="icons"
          alt="nav cart"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
        />
      </div>
      <ul className="nav-options">
        <li className="options">Home</li>
        <li className="options">Products</li>
        <li className="options">Cart</li>
        <button className="button" type="button">
          Logout
        </button>
      </ul>
    </nav>
  </div>
)
export default Header
