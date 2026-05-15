import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ShibaHomepage from './emergenshiba/ShibaHomepage';
import Home from './Home';
import Unavailable from './markside_components/Unavailable';

function Main() {
  return (
    <>
      <header>
          <div className='primary-header banner-bg-image'>
              <div className='header-gray-bg'>
                  <h1 className='dovetail-title header-text'>Aymen Nhaila</h1>
              </div>
          </div>
      </header>
    
      <Router>
        <Routes>

          <Route path="/" Component={Home} />

          <Route path="/not_available" Component={Unavailable} />

          <Route path="/emergenshibe" Component={ShibaHomepage} />

        </Routes>
      </Router>

      <footer>
          <div className='banner-bg-image'>
              <div className='footer-gray-bg'>
                  <h1 className='footer-text'>
                    Forked from Markside by Dendrobyte. Built with React/TypeScript.
                  </h1>
              </div>
          </div>
      </footer>
    </>
  );
}

export default Main;
