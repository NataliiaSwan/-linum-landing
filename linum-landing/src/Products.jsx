import React from "react";
import css from "./Products.module.css";

const Products = () => {
  const products = [
    "https://images.unsplash.com/photo-1713881649391-a1c8ddaf83cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1713881604560-085594ed2c3d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1693443688057-85f57b872a3c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <section id="products" className={css.products}>
      <h3 className={css.title}>Наші моделі</h3>
      <ul className={css.grid}>
        {products.map((src, i) => (
          <li key={i} className={css.card}>
            <img src={src} alt={`Модель ${i + 1}`} loading="lazy" />
            <button className={css.detailBtn} type="button">
              Детальніше
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
