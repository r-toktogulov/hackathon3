import { Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-block">
      <div className="footer-block-leftside">
        <div className="footer-block-leftside-item">
          <img
            src="https://istore.kg/static/_image/istore_logo.png"
            alt="logo-footer"
          />
          <span>Магазин техники Apple в Бишкеке</span>
        </div>
        <div className="footer-block-leftside-item">
          <span className="bold">Режим работы</span>
          <span>Пн - Вс 10:00 - 20:00</span>
        </div>
      </div>

      <div className="footer-block-rightside">
        <div className="footer-block-rightside-item">
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
        <div className="footer-block-rightside-item">
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
        <div className="footer-block-rightside-item">
          <span className="bold">Контакты</span>
          <Link>
            <span>пр. Манаса, 40 (пер. ул.Киевская)</span>
          </Link>
          <Link>
            <span>+996 (555) 802 000</span>

            <span>+996 (505) 802 000</span>
          </Link>
          <Link>
            <span>istorekg@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
