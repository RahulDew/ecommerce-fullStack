import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./screens/Home";
import ProductPage from "./screens/ProductPage";
import AddItemPage from "./screens/AddItemPage";
import ProductsPage from "./screens/ProductsPage";
import SearchPage from "./screens/SearchPage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/signup";
import CartPage from "./screens/CartPage";
import Navbar from "./components/Navbar";
import Checkout from "./screens/Checkout";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="product-details/:id" element={<ProductPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
