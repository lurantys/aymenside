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
                  <h1 className='dovetail-title header-text'>Hisuian</h1>
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
    </>
  );
}

export default Main;
