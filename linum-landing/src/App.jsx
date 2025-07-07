import React from "react";
import css from "../src/App.module.css";
import Header from "../src/Header.jsx";
import Hero from "../src/Hero.jsx";
import Products from "../src/Products.jsx";
import Features from "../src/Features.jsx";
import OrderForm from "../src/OrderForm.jsx";
import Footer from "../src/Footer.jsx";

function App() {
  return (
    <>
      <div class={css.container}>
        <Header />
        <main>
          <Hero />
          <Products />
          <Features />
          <OrderForm />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
