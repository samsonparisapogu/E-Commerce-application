import { useContext } from "react";
import UserContext from "../context/UserContext";
import Welcome from "../components/Welcome";

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>Welcome to E-Commerce Store</h1>
        <p>
          Find the best products with great discounts and fast delivery.
        </p>
      </div>
    </div>
  );
}

export default Home;