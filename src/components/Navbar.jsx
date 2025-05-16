import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">TechMob</Link>
        <div className="d-flex">
          <Link className="nav-link text-white" to="/products">Products</Link>
          <Link className="nav-link text-white" to="/cart">Cart</Link>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
