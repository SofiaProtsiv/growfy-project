import './clients.scss';
import {
  clients_01_icon,
  clients_02_icon,
  clients_03_icon,
  clients_04_icon,
  clients_05_icon,
} from '../../images';
export default function Clients() {
  return (
    <section className="page__clients clients">
      <div className="clients__container no-padding">
        <h2 className="clients__title">TRUSTED BY startups and large enterprises</h2>
        <div className="clients__slider-container">
          <div className="clients__items primary">
            <div className="clients__item">
              <img src={clients_01_icon} alt="client" />
            </div>
            <div className="clients__item">
              <img src={clients_02_icon} alt="client" />
            </div>
            <div className="clients__item">
              <img src={clients_03_icon} alt="client" />
            </div>
            <div className="clients__item">
              <img src={clients_04_icon} alt="client" />
            </div>
            <div className="clients__item">
              <img src={clients_05_icon} alt="client" />
            </div>
          </div>
          <div className="clients__items secondary">
            <div className="clients__item">
              <img src={clients_01_icon} alt="client" />
            </div>
            <div className="clients__item">
              <img src={clients_02_icon} alt="client" />
            </div>
            <div className="clients__item">
              <img src={clients_03_icon} alt="client" />
            </div>
            <div className="clients__item">
              <img src={clients_04_icon} alt="client" />
            </div>
            <div className="clients__item">
              <img src={clients_05_icon} alt="client" />
            </div>
          </div>
          <div className="container__gradient-right"></div>
          <div className="container__gradient-left"></div>
        </div>
      </div>
    </section>
  );
}
