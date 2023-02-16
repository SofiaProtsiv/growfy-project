import {
    about_clients_01,
    about_hero_01,
    about_hero_02,
    about_hero_03,
    about_start_01
} from '../../images';
import './about.scss'

export default function About() {
    return <section className='about__section'>
        <div className='about__container'>
            <div className='about__image-container'>
                <div className='about__image-wrapper'>
                    <img src={about_hero_01} alt="girl smile" className='about__image' />
                </div>
                <div className='about__image-wrapper'>
                    <img src={about_hero_02} alt="girl smile" className='about__image' />
                </div>
                <div className='about__image-wrapper'>

                    <img src={about_hero_03} alt="boy smile" className='about__image' />
                </div>


            </div>
        </div>
    </section>
}