import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-pro">
    <ul className="unlist-items">
      <li className="logo-class">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo-image"
        />
        <h1>Wave</h1>
      </li>
      <li className="list-items">
        <Link to="/" className="heading-pro">
          <h1>Home</h1>
        </Link>

        <Link to="/about" className="heading-pro">
          <h1>About</h1>
        </Link>

        <Link to="/contact" className="heading-pro">
          <h1>Contact</h1>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
