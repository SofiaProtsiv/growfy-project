import './blog.scss';
import { blog_01, blog_02, blog_03 } from '../../images';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Blog() {
  return (
    <section className="page__blog blog">
      <div className="blog__container">
        <div className="blog__header header-main">
          <a href="" className="header-main__label">
            Blog
          </a>
          <div className="header-main__body">
            <div className="header-main__text">
            <h2 className="header-main__title">
            Read our <br />
            articles & news
          </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero.
              </p>
            </div>
            <div className="header-main__actions">
              <a href="" className="header-main__button button">
                All Posts
              </a>
            </div>
          </div>
        </div>
        <div className="blog__items">
          <article className="blog__item item-blog">
            <div className="item-blog__header">
              <a href="" className="item-blog__image">
                <img src={blog_01} alt="image" />
              </a>
              <a href="" className="item-blog__category">
                Social Media
              </a>
            </div>
            <div className="item-blog__body">
              <div className="item-blog__date">August 28, 2022</div>
              <h4 className="item-blog__title">
                <a href="" className="item-blog__link-title">
                  How to Use Social Proof in Marketing
                </a>
              </h4>
              <div className="item-blog__text text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna
                  adipiscing praesent velit viverra sit semper lorem.
                </p>
              </div>
              <a href="" className="item-blog__link">
                Read now <ArrowRightAltIcon className="arrow_icon"/>
              </a>
            </div>
          </article>
          <article className="blog__item item-blog">
            <div className="item-blog__header">
              <a href="" className="item-blog__image">
                <img src={blog_02} alt="image" />
              </a>
              <a href="" className="item-blog__category">
                SEO
              </a>
            </div>
            <div className="item-blog__body">
              <div className="item-blog__date">August 28, 2022</div>
              <h4 className="item-blog__title">
                <a href="" className="item-blog__link-title">
                  Make a great first impression with these titles
                </a>
              </h4>
              <div className="item-blog__text text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna
                  adipiscing praesent velit viverra sit semper lorem.
                </p>
              </div>
              <a href="" className="item-blog__link">
                Read now <ArrowRightAltIcon className="arrow_icon"/>
              </a>
            </div>
          </article>
          <article className="blog__item item-blog">
            <div className="item-blog__header">
              <a href="" className="item-blog__image">
                <img src={blog_03} alt="image" />
              </a>
              <a href="" className="item-blog__category">
               Strategy
              </a>
            </div>
            <div className="item-blog__body">
              <div className="item-blog__date">August 28, 2022</div>
              <h4 className="item-blog__title">
                <a href="" className="item-blog__link-title">
                  How to Grab Your Reader’s Attention
                </a>
              </h4>
              <div className="item-blog__text text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna
                  adipiscing praesent velit viverra sit semper lorem.
                </p>
              </div>
              <a href="" className="item-blog__link">
                Read now <ArrowRightAltIcon className="arrow_icon"/>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
