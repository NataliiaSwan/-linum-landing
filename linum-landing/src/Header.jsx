import css from "./Header.module.css";
import React from "react";

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <h1 className={css.logo}>Linum</h1>
        <nav>
          <ul className={css.navList}>
            <li>
              <a href="#features">Переваги</a>
            </li>
            <li>
              <a href="#products">Продукти</a>
            </li>
            <li>
              <a href="#footer">Контакти</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
