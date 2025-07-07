import css from "./OrderForm.module.css";

const OrderForm = () => {
  return (
    <>
      <section id="contact" className={css.contact}>
        <h3>Зв'яжіться з нами</h3>
        <form>
          <input type="text" placeholder="Ім'я" required></input>
          <input type="email" placeholder="Email" required />
          <button type="submit" className="btn-primary">
            Надіслати
          </button>
        </form>
      </section>
    </>
  );
};
export default OrderForm;
