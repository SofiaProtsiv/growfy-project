import './advantages.scss';
import { advantages_01 } from '../../images';

export default function Advantages() {
  return (
    <section className="page__advantages advantages">
      <div className="advantages__container">
        <div className="advantages__items">
          <article className="advantages__item">
            <h4 className="advantages__value">1.2M+</h4>
            <div className="advantages__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
            </div>
          </article>
          <article className="advantages__item">
            <h4 className="advantages__value">3.4B</h4>
            <div className="advantages__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
            </div>
          </article>
          <article className="advantages__item">
            <h4 className="advantages__value">98%</h4>
            <div className="advantages__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
            </div>
          </article>
          <article className="advantages__item">
            <h4 className="advantages__value">10+</h4>
            <div className="advantages__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
            </div>
          </article>
        </div>
        <div className="advantages__image">
          <img src={advantages_01} alt="image" />
        </div>
      </div>
    </section>
  );
}
