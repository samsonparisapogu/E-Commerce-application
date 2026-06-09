import { Link, Outlet } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Products() {
  const users = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="container">
      <div className="card">
        <h1>Products Page</h1>

        <p>
          Browse our product categories and explore
          available products.
        </p>

        <div className="product-links">
          <Link to="electronics">
            Electronics
          </Link>

          <Link to="clothing">
            Clothing
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Outlet />
      </div>
    </div>
  );
}

export default Products;