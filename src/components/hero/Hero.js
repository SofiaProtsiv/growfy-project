import './hero.scss';
import { hero_01, hero_02, hero_03, hero_04 } from '../../images';

export default function Hero() {
  return (
    <section className="page__main main">
      <div className="main__container">
        <div className="main__content">
          <div className="main__header header-main">
            <h1 className="header-main__title">Marketing solutions that grow your business.</h1>
            <div className="header-main__text ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
              </p>
            </div>
            <div className="header-main__actions">
              <a href="" className="header-main__button button">
                Our services
              </a>
              <a href="" className="header-main__button button button_dark">
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div className="main__images images-main">
          <div className="images-main__column">
            <div className="images-main__item images-main__item_1">
              <img src={hero_01} alt="Image" />
            </div>
            <div className="images-main__item images-main__item_2">
              <img src={hero_02} alt="Image" />
            </div>
          </div>
          <div className="images-main__column">
            <div className="images-main__item images-main__item_3">
              <img src={hero_03} alt="Image" />
            </div>
            <div className="images-main__item images-main__item_4">
              <img src={hero_04} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
