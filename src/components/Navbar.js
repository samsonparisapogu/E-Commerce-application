import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/crud">CRUD</Link> |{" "}
      <Link to="/counter">Counter</Link> |{" "}
      <Link to="/search">Search</Link>
    </nav>
  );
}

export default Navbar;