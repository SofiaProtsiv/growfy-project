import './why_we.scss';
import { why_we_01, why_we_02 } from '../../images';

export default function WhyWe() {
  return (
    <section className="page__why why">
      <div className="why__container">
        <div className="why__images images-why">
          <div className="images-why__item images-why__item_1">
            <img src={why_we_01} alt="Image" />
          </div>
          <div className="images-why__item images-why__item_2">
            <img src={why_we_02} alt="Image" />
          </div>
        </div>
        <div className="why__content">
          <div className="why__header header-main">
            <a href="" className="header-main__label">
              why choose us
            </a>
            <h2 className="header-main__title">
              We help great brands scale with content marketing.
            </h2>
            <div className="header-main__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
              </p>
            </div>
            <ul className="header-main__list">
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
