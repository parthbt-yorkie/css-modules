import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import ProductCard from "./components/ProductCard";
import ProductCardModule from "./components/ProductCardModule";
import "./styles/global.css";

// Lazy load UserCard so its CSS only loads when needed
const UserCard = lazy(() => import("./components/UserCard"));
const UserCardModule = lazy(() => import("./components/UserCardModule"));

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
        Products (Regular CSS)
      </Link>
      <Link
        to="/users"
        style={{
          marginRight: "1rem",
          padding: "0.5rem 1rem",
          background:
            location.pathname === "/users" ? "#007bff" : "transparent",
          color: location.pathname === "/users" ? "white" : "#007bff",
          textDecoration: "none",
          borderRadius: "4px",
          border: "1px solid #007bff",
        }}
      >
        Users (Regular CSS)
      </Link>
      <Link
        to="/products-modules"
        style={{
          marginRight: "1rem",
          padding: "0.5rem 1rem",
          background:
            location.pathname === "/products-modules"
              ? "#28a745"
              : "transparent",
          color:
            location.pathname === "/products-modules" ? "white" : "#28a745",
          textDecoration: "none",
          borderRadius: "4px",
          border: "1px solid #28a745",
        }}
      >
        Products (CSS Modules)
      </Link>
      <Link
        to="/users-modules"
        style={{
          padding: "0.5rem 1rem",
          background:
            location.pathname === "/users-modules" ? "#28a745" : "transparent",
          color: location.pathname === "/users-modules" ? "white" : "#28a745",
          textDecoration: "none",
          borderRadius: "4px",
          border: "1px solid #28a745",
        }}
      >
        Users (CSS Modules)
      </Link>
    </nav>
  );
};

const ProductsPage = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Products - Regular CSS</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        These cards use regular CSS and will be affected by CSS conflicts.
      </p>

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
      <h1>Users - Regular CSS</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        These cards use regular CSS and will cause conflicts with other pages.
      </p>

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

const ProductsModulePage = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Products - CSS Modules</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        These cards use CSS Modules and will NOT be affected by CSS conflicts.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        <ProductCardModule />
        <ProductCardModule />
        <ProductCardModule />
        <ProductCardModule />
        <ProductCardModule />
        <ProductCardModule />
      </div>
    </div>
  );
};

const UsersModulePage = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Users - CSS Modules</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        These cards use CSS Modules and will NOT cause conflicts with other
        pages.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <UserCardModule />
          <UserCardModule />
          <UserCardModule />
          <UserCardModule />
          <UserCardModule />
          <UserCardModule />
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
          <Route path="/products-modules" element={<ProductsModulePage />} />
          <Route path="/users-modules" element={<UsersModulePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
