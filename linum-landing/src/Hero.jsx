import css from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={css.hero}>
        <img
          src="https://images.unsplash.com/photo-1713881842156-3d9ef36418cc?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h2>Натуральні льняні рубашки для справжніх поціновувачів</h2>
        <p>
          Стиль, комфорт і дихаючі матеріали — ідеально для будь-якої пори року.
        </p>
        <button className="btn-primary">Замовити зараз</button>
      </section>
    </>
  );
};
export default Hero;
