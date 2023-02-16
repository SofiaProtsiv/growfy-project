import {
  services_01_icon,
  services_02_icon,
  services_03_icon,
  services_04_icon,
} from '../../images';

import './services_view.scss';

export default function Services() {
  return (
    <section className="services">
      <div className="services__container">
        <div className="services__content">
          <div className="services__header header-main">
            <a href="" className="header-main__label">
              Services
            </a>
            <h2 className="header-main__title">Services we offer</h2>
            <div className="header-main__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
              </p>
            </div>
            <div className="header-main__actions">
              <a href="" className="header-main__button button">
                All services
              </a>
            </div>
          </div>
        </div>
        <div className="services__items">
          <div className="services__column">
            <div className="services__item item-service">
              <div className="item-service__icon">
                <img src={services_01_icon} alt="service" />
              </div>
              <h4 className="item-service__title">Social Media Marketing</h4>
              <div className="item-service__text text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna
                adipiscing praesent velit.
              </div>
            </div>
            <div className="services__item item-service">
              <div className="item-service__icon">
                <img src={services_02_icon} alt="service" />
              </div>
              <h4 className="item-service__title">Email Marketing</h4>
              <div className="item-service__text text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna
                adipiscing praesent velit.
              </div>
            </div>
          </div>
          <div className="services__column">
            <div className="services__item item-service">
              <div className="item-service__icon">
                <img src={services_03_icon} alt="service" />
              </div>
              <h4 className="item-service__title">Paid Advertising</h4>
              <div className="item-service__text text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna
                adipiscing praesent velit.
              </div>
            </div>
            <div className="services__item item-service">
              <div className="item-service__icon">
                <img src={services_04_icon} alt="service" />
              </div>
              <h4 className="item-service__title">SEO Optimization</h4>
              <div className="item-service__text text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna
                adipiscing praesent velit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
