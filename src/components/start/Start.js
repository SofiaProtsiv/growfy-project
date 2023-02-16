import './start.scss';

export default function Start() {
  return (
    <section className="page__start start">
      <div className="start__container">
        <div className="start__body">
          <div className="start__column">
            <h2 className="start__title">
              Ready to start scaling <br />
              your business now?
            </h2>
            <div className="start__text text">
              <p>Lorem ipsum dolor sit am consectetur adipiscing varius enim in eros.</p>
            </div>
          </div>
          <div className="start__column">
            <div className="start__actions">
              <a href="" className="start__button button">
                Our services
              </a>
              <a href="" className="start__button button button_dark">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
