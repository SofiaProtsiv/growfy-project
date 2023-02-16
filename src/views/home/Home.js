import Hero from '../../components/hero';
import Clients from '../../components/clients';
import Services from '../../components/services';
import WhyWe from '../../components/why_we';
import Advantages from '../../components/advantages';

import Testimonials from '../../components/testimonials';
import Blog from '../../components/blog';
import Start from '../../components/start';

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <WhyWe />
      <Advantages />
      <Testimonials />
      <Blog />
      <Start />
    </>
  );
}
