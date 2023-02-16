import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './mobileMenu.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MobileMenu({ isOpenMobileMenu }) {
  const [isShown, setIsShown] = useState(false);

  isOpenMobileMenu ? document.body.classList.add('lock') : document.body.classList.remove('lock');
  useEffect(() => {
    !isOpenMobileMenu && setIsShown(false)
  }, [isOpenMobileMenu])

  return (
    <div className={isOpenMobileMenu ? 'mobileMenu__overlay open' : 'mobileMenu__overlay'}>
      <nav className="mobileMenu__nav">
        <div className="mobileMenu__body">
          <ul className="mobileMenu__list">
            <li className="mobileMenu__item">
              <NavLink to="/" className="mobileMenu__link">
                Home
              </NavLink>
            </li>
            <li className="mobileMenu__item">
              <NavLink to="/about" className="mobileMenu__link">
                About
              </NavLink>
            </li>
            <li
              className={isShown ? 'mobileMenu__item active' : 'mobileMenu__item'}
              onClick={() => setIsShown(!isShown)}
            >
              <a className="mobileMenu__link">
                Pages
                <ExpandMoreIcon className="arrow_icon" />
              </a>
              <nav className="mobileMenu__dropdown_nav">
                <div className="mobileMenu__dropdown-nav__wrapper">
                  <ul className="mobileMenu__dropdown-nav__grid">
                    <li className="mobileMenu__dropdown-nav__grid-element">
                      <div className="mobileMenu__dropdown-menu">
                        <NavLink to="/" className="mobileMenu__dropdown-link">
                          Home
                        </NavLink>
                        <NavLink to="/about" className="mobileMenu__dropdown-link">
                          About
                        </NavLink>
                        <NavLink to="/services" className="mobileMenu__dropdown-link">
                          Services
                        </NavLink>
                        <NavLink to="/packages" className="mobileMenu__dropdown-link">
                          Packages
                        </NavLink>
                        <NavLink to="/blog" className="mobileMenu__dropdown-link">
                          Blog
                        </NavLink>
                        <NavLink to="/contact" className="mobileMenu__dropdown-link">
                          Contact
                        </NavLink>
                      </div>
                    </li>
                    <li className="mobileMenu__dropdown-nav__grid-element">
                      <div className="mobileMenu__dropdown-menu">
                        <NavLink to="/instructions" className="mobileMenu__dropdown-link">
                          Instructions
                        </NavLink>
                        <NavLink to="/style-guide" className="mobileMenu__dropdown-link">
                          Style Guide
                        </NavLink>

                        <NavLink to="/licenses" className="mobileMenu__dropdown-link">
                          Licenses
                        </NavLink>
                        <NavLink to="/changelog" className="mobileMenu__dropdown-link">
                          Changelog
                        </NavLink>
                        <NavLink to="/notfound" className="mobileMenu__dropdown-link">
                          404 Not Found
                        </NavLink>
                        <NavLink to="/password-protected" className="mobileMenu__dropdown-link">
                          Password Protected
                        </NavLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </li>
            <li className="mobileMenu__item">
              <NavLink to="/" className="mobileMenu__link">
                Services
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <NavLink to="/" className="header__button button">
        Get started
      </NavLink>
    </div>
  );
}
