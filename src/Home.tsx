import './Home.css';
import realSelf from './img/real_self.jpg';
import wooper from './img/wooper.png';
import Projects from './markside_components/Projects';

function Home() {
    return (
        <main id="main-content" className="portfolio">
            <section className="intro" aria-labelledby="intro-title">
                <div className="intro-copy">
                    <h2 id="intro-title">I build apps, browser extensions, and interactive tools.</h2>
                    <p>I'm Aymen, a computer science student who enjoys turning everyday ideas into software people can use.</p>
                    <p>Outside of coding, you'll find me exploring game systems, interactive experiences, and the technology behind them.</p>
                    <nav className="intro-links" aria-label="Quick links">
                        <a className="primary-link" href="#Projects" onClick={() => window.dispatchEvent(new Event('openProjects'))}>See my projects</a>
                        <a href="https://github.com/lurantys/">GitHub</a>
                        <a href={process.env.PUBLIC_URL + '/Resume_NHAILAAymen.pdf'}>Resume</a>
                    </nav>
                    <a className="intro-email" href="mailto:a.nhaila@aui.ma">a.nhaila@aui.ma</a>
                </div>
                <div className="self-pictures">
                    <figure className="real-picture">
                        <img src={realSelf} alt="Aymen beside the Ado statue in Shibuya, both wearing Japan football shirts" width="900" height="1200" {...{ fetchpriority: 'high' }} />
                        <figcaption>The Real Me <span>Shibuya, Japan</span></figcaption>
                    </figure>
                    <figure className="metaphorical-picture">
                        <img src={process.env.PUBLIC_URL + '/metaphorical.png'} alt="Aymen's metaphorical self" width="160" height="160" />
                        <figcaption>Metaphorical Self</figcaption>
                    </figure>
                </div>
            </section>

            <Projects />

            <div className="personal-sections">
                <section id="Contact" className="contact-section" aria-labelledby="contact-title">
                    <h2 id="contact-title">Find me</h2>
                    <p>For projects, work, or a conversation.</p>
                    <ul className="contact-links">
                        <li><a href="mailto:a.nhaila@aui.ma">Email <span>a.nhaila@aui.ma</span></a></li>
                        <li><a href="https://github.com/lurantys/">GitHub <span>@lurantys</span></a></li>
                        <li><a href="https://www.linkedin.com/in/aymen-nhaila-9ab6b5319/">LinkedIn <span>Aymen Nhaila</span></a></li>
                        <li><a href={process.env.PUBLIC_URL + '/Resume_NHAILAAymen.pdf'}>Resume <span>PDF</span></a></li>
                        <li><a href="https://leetcode.com/u/lurantys/">LeetCode <span>Occasionally active</span></a></li>
                        <li><a href="https://www.instagram.com/bynhaila/">Instagram <span>@bynhaila</span></a></li>
                    </ul>
                    <img src={wooper} alt="" className="wooper-decoration" width="96" height="96" loading="lazy" />
                </section>
                <section className="shenanigans-section" aria-labelledby="shenanigans-title">
                    <h2 id="shenanigans-title">Shenanigans</h2>
                    <p>A little corner of the internet I like.</p>
                    <div className="video-embed-container">
                        <iframe src="https://www.youtube.com/embed/omh8FLFJX7Y" title="Shenanigans" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <a className="video-link" href="https://www.youtube.com/watch?v=omh8FLFJX7Y">Watch on YouTube</a>
                </section>
            </div>
            <footer className="site-footer">Aymenside <span>Made by Aymen Nhaila.</span></footer>
        </main>
    );
}

export default Home;
