import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import Unavailable from './markside_components/Unavailable';

function Main() {
    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <header className="primary-header">
                <div className="header-inner">
                    <div>
                        <a className="site-name" href="/" aria-label="Aymen Nhaila home"><h1>Aymen Nhaila</h1></a>
                        <p>Computer science student &amp; indie developer</p>
                    </div>
                    <nav aria-label="Main navigation">
                        <a href="/#Projects" onClick={() => window.dispatchEvent(new Event('openProjects'))}>Projects</a>
                        <a href="/#Contact">Contact</a>
                    </nav>
                </div>
            </header>
            <Router>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/not_available" Component={Unavailable} />
                </Routes>
            </Router>
        </>
    );
}

export default Main;
