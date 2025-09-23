import React from "react";

interface ProductCardProps {
  title?: string;
  price?: string;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title = "Sample Product",
  price = "$99.99",
  description = "This product card uses global CSS styles.",
}) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        <p>{description}</p>
        <p style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#28a745" }}>
          {price}
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
