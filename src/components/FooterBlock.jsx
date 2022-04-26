import { Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-block">
      <div className="footer-block-leftside">
        <img
          src="https://istore.kg/static/_image/istore_logo.png"
          alt="logo-footer"
        />
        <span>Магазин техники Apple в Бишкеке</span>
        <span className="bold">Режим работы</span>
        <span>Пн - Вс 10:00 - 20:00</span>
      </div>

      <div>
        <div>
          <span className="bold">Продукция</span>
          <Link>
            <span>Mac</span>
          </Link>
          <Link>
            <span>iPad</span>
          </Link>
          <Link>
            <span>iPhone</span>
          </Link>
          <Link>
            <span>Watch</span>
          </Link>
        </div>
        <div>
          <span className="bold">8 лет с Вами</span>
          <Link>
            <span>О нас</span>
          </Link>
          <Link>
            <span>Почему iStore</span>
          </Link>
          <Link>
            <span>Услуги</span>
          </Link>
          <Link>
            <span>Обратная связь</span>
          </Link>
        </div>
        <div>
          <span className="bold">Контакты</span>
          <Link>
            <span>О нас</span>
          </Link>
          <Link>
            <span>Почему iStore</span>
          </Link>
          <Link>
            <span>Услуги</span>
          </Link>
          <Link>
            <span>Обратная связь</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
