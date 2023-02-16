import './testimonials.scss';
import {
  testimonials_avatar_01,
  testimonials_avatar_02,
  testimonials_avatar_03,
  testimonials_rating_icon,
} from '../../images';

export default function Testimonials() {
  return (
    <section className="page__testimonials testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header header-main">
          <a href="" className="header-main__label">
            testimonials
          </a>
          <h2 className="header-main__title">See what our clients say</h2>
          <div className="header-main__body">
            <div className="header-main__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero.
              </p>
            </div>
            <div className="header-main__actions">
              <a href="" className="header-main__button button">
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <div className="testimonials__items">
          <article className="testimonials__item item-testimonial">
            <div className="item-testimonial__user user-testimonial">
              <div className="user-testimonial__avatar user-testimonial__avatar_1">
                <img src={testimonials_avatar_01} alt="avatars" />
              </div>
              <div className="user-testimonial__body">
                <div className="user-testimonial__title">John Doe</div>
                <div className="user-testimonial__company">Company Name</div>
              </div>
            </div>
            <h4 className="item-testimonial__title">"I recommend this agency"</h4>
            <div className="item-testimonial__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero.
              </p>
            </div>
            <div className="item-testimonial__rating">
              <img src={testimonials_rating_icon} alt="rating" />
            </div>
          </article>
          <article className="testimonials__item item-testimonial">
            <div className="item-testimonial__user user-testimonial">
              <div className="user-testimonial__avatar user-testimonial__avatar_2">
                <img src={testimonials_avatar_02} alt="avatars" />
              </div>
              <div className="user-testimonial__body">
                <div className="user-testimonial__title">John Doe</div>
                <div className="user-testimonial__company">Company Name</div>
              </div>
            </div>
            <h4 className="item-testimonial__title">"The support is awesome"</h4>
            <div className="item-testimonial__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero.
              </p>
            </div>
            <div className="item-testimonial__rating">
              <img src={testimonials_rating_icon} alt="rating" />
            </div>
          </article>
          <article className="testimonials__item item-testimonial">
            <div className="item-testimonial__user user-testimonial">
              <div className="user-testimonial__avatar user-testimonial__avatar_3">
                <img src={testimonials_avatar_03} alt="avatars" />
              </div>
              <div className="user-testimonial__body">
                <div className="user-testimonial__title">John Doe</div>
                <div className="user-testimonial__company">Company Name</div>
              </div>
            </div>
            <h4 className="item-testimonial__title">“A game changer for us”</h4>
            <div className="item-testimonial__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero.
              </p>
            </div>
            <div className="item-testimonial__rating">
              <img src={testimonials_rating_icon} alt="rating" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
