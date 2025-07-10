import React from "react";
import css from "./Hero.module.css";

const Hero = () => {
  const handleScrollToOrder = () => {
    const formElement = document.getElementById("orderForm");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={css.hero}>
      <div className={css.container}>
        <img
          src="https://images.unsplash.com/photo-1713881842156-3d9ef36418cc?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Льняна рубашка"
          height="800"
        />
        <h2>Натуральні льняні рубашки для справжніх поціновувачів</h2>
        <p>
          Стиль, комфорт і дихаючі матеріали — ідеально для будь-якої подорожі.
        </p>
        <button onClick={handleScrollToOrder}>Замовити зараз</button>
      </div>
    </section>
  );
};

export default Hero;
