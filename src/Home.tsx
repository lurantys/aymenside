import './Home.css';
import real_self_img from './img/real_self.webp';
import wooper_img from './img/wooper.png';
import Projects from './markside_components/Projects';
import Wooperdex from './markside_components/Wooperdex';

function Home() {
    return (
        <>  
            <div className='middle-column container-body-width'>
                <div className='middle-flex-row'>
                    <div className='blue-bubble who-am-i'>
                        <h1 className='blue-league-title'>Who am I?</h1>
                        <p className='gray-league-paragraph'>
                        CS student at Al Akhawayn University. Most of my projects started as something I personally wanted to exist: a manga reader with progress tracking, a chess cheat for Chrome, a Pokémon-themed pomodoro timer.
                        <br></br><br></br>
                        Outside of class, my time goes into anime, games, and taking things apart to see how they work: my switch most recently, to solder a mod chip. Just finished an exchange semester in Hiroshima.
                        <br></br><br></br>
                        Check out my <a className='league-p-clickable' href="#Projects" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('openProjects')); }}>Projects</a>, everything I've shipped is under there.</p>

                        <br></br><br></br>
                    </div>
                    <div className='blue-bubble self-pictures'>
                        <div className='self-picture-item'>
                            <img src={real_self_img} alt='The Real Me' width={400} height={400} loading='lazy'></img>
                            <p className='picture-subtitle'>The Real Me</p>
                        </div>

                        <br></br>

                        <div className='self-picture-item'>
                            <img src={process.env.PUBLIC_URL + '/metaphorical.webp'} alt='Metaphorical Self' width={400} height={400} loading='lazy'></img>
                            <p className='picture-subtitle'>Metaphorical Self</p>
                        </div>

                    </div>
                </div>
                <div className ='middle-bottom'>
                    <div className='blue-bubble'>
                        <Projects />
                    </div>
                </div>
                <div className='middle-flex-row'>
                    <div className='blue-bubble half-container'>
                        <div className='half-container-content'>
                            <h1 className='blue-league-title'>Misc Links</h1>
                            <ul>
                                <li className='misc-links-list-item'>- <a href="https://www.linkedin.com/in/aymen-nhaila-9ab6b5319/" className='misc-links-title'>LinkedIn</a>, my professional profile</li>
                                <li className='misc-links-list-item'>- <a href="https://github.com/lurantys/" className='misc-links-title'>GitHub</a>, where you can find all my code</li>
                                <li className='misc-links-list-item'>- <a href="https://leetcode.com/u/lurantys/" className='misc-links-title'>LeetCode</a>, (i'm not that active)</li>
                                <li className='misc-links-list-item'>- <a href="mailto:a.nhaila@aui.ma" className='misc-links-title'>Email</a>, for professional purposes</li>
                                <hr></hr>
                                <li className='misc-links-list-item'>- <a href="https://www.instagram.com/bynhaila/" className='misc-links-title'>Instagram</a>, if you know me personally</li>
                            <li className='misc-links-list-item'>- <a href={process.env.PUBLIC_URL + '/Resume_NHAILAAymen.pdf'} className='misc-links-title'>Resume</a>, check it out!</li>
                            </ul>
                        </div>
                        <img src={wooper_img} alt="Wooper" className='wooper-decoration' />
                    </div>
                    <div className='blue-bubble half-container'>
                        <Wooperdex />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
