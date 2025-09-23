import React from "react";
import styles from "./ProductCardModule.module.css";

interface ProductCardModuleProps {
  title?: string;
  price?: string;
  description?: string;
}

const ProductCardModule: React.FC<ProductCardModuleProps> = ({
  title = "Sample Product",
  price = "$99.99",
  description = "This product card uses CSS Modules - scoped styles!",
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <p>{description}</p>
        <p style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#28a745" }}>
          {price}
        </p>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCardModule;