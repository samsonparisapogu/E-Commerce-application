import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Crud from "./pages/Crud";
import Counter from "./pages/Counter";
import SearchPage from "./pages/SearchPage";

import UserContext from "./context/UserContext";

import Electronics from "./pages/Electronics";
import Clothing from "./pages/Clothing";

function App() {
  return (
    <UserContext.Provider value={"Samson"}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}>
  <Route
    path="electronics"
    element={<Electronics />}
  />

  <Route
    path="clothing"
    element={<Clothing />}
  />
</Route>
          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;