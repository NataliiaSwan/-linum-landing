import css from "./Features.module.css";

const Features = () => {
  return (
    <>
      <section id="features" className={css.features}>
        <h3>Чому льняні рубашки?</h3>
        <ul>
          <li>100% натуральний льон</li>
          <li>Дихаючий матеріал</li>
          <li>Екологічне виробництво</li>
        </ul>
      </section>
    </>
  );
};
export default Features;
