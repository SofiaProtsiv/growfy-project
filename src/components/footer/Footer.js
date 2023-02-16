import './footer.scss';
import {
  logo_icon, social_01_icon,
  social_02_icon,
  social_03_icon,
  social_04_icon,
  social_05_icon,
} from '../../images';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main main-footer">
        <div className="main-footer__container">
          <div className="main-footer__column">
            <a href="" className="main-footer__logo">
              <img src={logo_icon} alt="logo" />
            </a>
            <div className="main-footer__text text">
              <p>
                Growfy is a template highly suitable for modern marketing agencies, digital studios,
                startups and businesses. The design is made in the dark style, which makes the site
                memorable and you can easily adapt it to your brand.
              </p>
            </div>
            <div className="main-footer__social social">
              <a href="" className="social__link">
                <img src={social_01_icon} alt="social" />
              </a>
              <a href="" className="social__link">
                <img src={social_02_icon} alt="social" />
              </a>
              <a href="" className="social__link">
                <img src={social_03_icon} alt="social" />
              </a>
              <a href="" className="social__link">
                <img src={social_04_icon} alt="social" />
              </a>
              <a href="" className="social__link">
                <img src={social_05_icon} alt="social" />
              </a>
            </div>
          </div>
          <div className="main-footer__column">
            <div className="main-footer__label">Pages</div>
            <nav className="main-footer__menu menu-footer">
              <ul className="menu-footer__list">
                <li className="menu-footer__item">
                  <a href="" className="menu-footer__link">
                    Home
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="" className="menu-footer__link">
                    About
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="" className="menu-footer__link">
                    Services
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="" className="menu-footer__link">
                    Packages
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="" className="menu-footer__link">
                    Blog
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="" className="menu-footer__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="main-footer__column">
            <div className="main-footer__label">Utility pages</div>
            <nav className="main-footer__menu menu-footer">
              <ul className="menu-footer__list">
                <li className="menu-footer__item">
                  <a href="" className="menu-footer__link">
                    Instructions
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="" className="menu-footer__link">
                    Style guide
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="" className="menu-footer__link">
                    Licenses
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="" className="menu-footer__link">
                    Changelog
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="" className="menu-footer__link">
                    404 Not found
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="" className="menu-footer__link">
                    Password protected
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="main-footer__column">
            <div className="main-footer__label">Subscribe to our newsletter</div>
            <div className="main-footer__text text">
              Lorem ipsum dolor sit am consectetur adipiscing
            </div>
            <form action="" className="subscribe">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="subscribe__input"
              />
              <button type="submit" className="subscribe__button button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer__bottom bottom-footer">
        <div className="bottom-footer__container">
          <div className="bottom-footer__copy">© 2022</div>
        </div>
      </div>
    </footer>
  );
}
