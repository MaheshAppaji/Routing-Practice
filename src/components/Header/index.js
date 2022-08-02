import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-head-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-img"
      />
      <p className="logo-title">Wave</p>
    </div>
    <ul className="list-container">
      <li className="list-item">
        <Link className="link-item" to="/">
          Home
        </Link>
      </li>
      <li className="list-item">
        <Link className="link-item" to="/about">
          About
        </Link>
      </li>
      <li className="list-item">
        <Link className="link-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
