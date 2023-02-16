import { Routes, Route } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';

import Home from '../views/home';
import About from '../views/about';
// import Services from '../views/services/Services';

import './App.scss';

function App() {
  return (
    <div className="page__wrapper">
      <Header />
      <main className="page">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />}></Route>
          {/* <Route exact path="/services" element={<Services />}></Route> */}
          {/* <Route exact path="/packages" restricted></Route> */}
          {/* <Route exact path="/blog" restricted></Route> */}
          {/* <Route exact path="/contact" restricted></Route> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
