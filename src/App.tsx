import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import ProductCard from "./components/ProductCard";
import "./styles/global.css";

// Lazy load UserCard so its CSS only loads when needed
const UserCard = lazy(() => import("./components/UserCard"));

const Navigation = () => {
  const location = useLocation();

  return (
    <nav
      style={{
        padding: "1rem",
        background: "#f8f9fa",
        borderBottom: "1px solid #dee2e6",
        marginBottom: "2rem",
      }}
    >
      <Link
        to="/products"
        style={{
          marginRight: "1rem",
          padding: "0.5rem 1rem",
          background:
            location.pathname === "/products" ? "#007bff" : "transparent",
          color: location.pathname === "/products" ? "white" : "#007bff",
          textDecoration: "none",
          borderRadius: "4px",
          border: "1px solid #007bff",
        }}
      >
        Products
      </Link>
      <Link
        to="/users"
        style={{
          padding: "0.5rem 1rem",
          background:
            location.pathname === "/users" ? "#007bff" : "transparent",
          color: location.pathname === "/users" ? "white" : "#007bff",
          textDecoration: "none",
          borderRadius: "4px",
          border: "1px solid #007bff",
        }}
      >
        Users
      </Link>
    </nav>
  );
};

const ProductsPage = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Products</h1>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

const UsersPage = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Users</h1>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </Suspense>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;