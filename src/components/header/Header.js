import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import { logo_icon } from '../../images';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MobileMenu from '../mobileMenu';

export default function Header() {
  const [isShown, setIsShown] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <NavLink to="/" className="header__logo">
            <img src={logo_icon} alt="logo" />
          </NavLink>
          <nav className="header__menu menu">
            <div className="menu__body">
              <ul className="menu__list">
                <li className="menu__item">
                  <NavLink to="/" className="menu__link">
                    Home
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/about" className="menu__link">
                    About
                  </NavLink>
                </li>
                <li
                  className={isShown ? 'menu__item active' : 'menu__item'}
                  onMouseOver={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  <div className="menu__link">
                    <div className="menu__link-wrapper">
                      Pages
                      <ExpandMoreIcon className="arrow_icon" />
                    </div>
                  </div>
                  <nav className="dropdown_nav">
                    <div className="dropdown-nav__wrapper">
                      <ul className="dropdown-nav__grid">
                        <li className="dropdown-nav__grid-element">
                          <h4 className="dropdown-heading">Pages</h4>
                          <div className="dropdown-menu">
                            <NavLink to="/" className="dropdown-link">
                              Home
                            </NavLink>
                            <NavLink to="/about" className="dropdown-link">
                              About
                            </NavLink>
                            <NavLink to="/services" className="dropdown-link">
                              Services
                            </NavLink>
                            <NavLink to="/packages" className="dropdown-link">
                              Packages
                            </NavLink>
                            <NavLink to="/blog" className="dropdown-link">
                              Blog
                            </NavLink>
                            <NavLink to="/contact" className="dropdown-link">
                              Contact
                            </NavLink>
                          </div>
                        </li>
                        <li className="dropdown-nav__grid-element">
                          <h4 className="dropdown-heading">Utility pages</h4>
                          <div className="dropdown-menu">
                            <NavLink to="/instructions" className="dropdown-link">
                              Instructions
                            </NavLink>
                            <NavLink to="/style-guide" className="dropdown-link">
                              Style Guide
                            </NavLink>
                            <NavLink to="/licenses" className="dropdown-link">
                              Licenses
                            </NavLink>
                            <NavLink to="/changelog" className="dropdown-link">
                              Changelog
                            </NavLink>
                            <NavLink to="/notfound" className="dropdown-link">
                              404 Not Found
                            </NavLink>
                            <NavLink to="/password-protected" className="dropdown-link">
                              Password Protected
                            </NavLink>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </li>
                <li className="menu__item">
                  <NavLink to="/services" className="menu__link">
                    Services
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <NavLink to="/cart" className="header__cart cart-header">
            <span className="cart-header__text">Cart</span>
            <span className="cart-header__quantity">0</span>
          </NavLink>
          <NavLink to="/services" className="header__button button">
            Get started
          </NavLink>
          <button className={isOpenMobileMenu ? "icon-menu open" : "icon-menu"} type="button" onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}>
            <span></span>
          </button>
        </div>
      </header>
      <MobileMenu isOpenMobileMenu={isOpenMobileMenu} />
    </>
  );
}
