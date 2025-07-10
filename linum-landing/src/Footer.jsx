// import React from "react";
// import css from "./Footer.module.css";
// import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer id="footer" className={css.footer}>
//       <div className={css.content}>
//         <p className={css.text}>
//           © {new Date().getFullYear()} Linum. Усі права захищені.
//         </p>
//         <div className={css.socialIcons}>
//           <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
//             <FaInstagram />
//           </a>
//           <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
//             <FaFacebookF />
//           </a>
//           <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer">
//             <FaTelegramPlane />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import css from "./Footer.module.css";
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className={css.footer}>
      <div className={css.content}>
        <div className={css.contacts}>
          <p>
            <strong>Контакти:</strong>
          </p>
          <p>
            Телефон: <a href="tel:+380971234567">+38 (097) 123 45 67</a>
          </p>
          <p>
            Email: <a href="mailto:info@linum.ua">info@linum.ua</a>
          </p>
          <p>Адреса: вул. Прикладна, 12, Київ, Україна</p>
        </div>

        <div className={css.socialIcons}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
        </div>

        <p className={css.text}>
          © {new Date().getFullYear()} Linum. Усі права захищені.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
