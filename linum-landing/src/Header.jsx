import css from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <h className={css.logo}>Linum</h>
        <nav>
          <ul className={css.navList}>
            <li>
              <a href="#features">Переваги</a>
            </li>
            <li>
              <a href="#products">Продукти</a>
            </li>
            <li>
              <a href="#contact">Контакти</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
