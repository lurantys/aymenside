import './Home.css';
import real_self_img from './img/real_self.jpg';
import wooper_img from './img/wooper.png';
import Projects from './markside_components/Projects';

function Home() {
    return (
        <>  
            <div className='middle-column container-body-width'>
                <div className='middle-flex-row'>
                    <div className='blue-bubble who-am-i'>
                        <h1 className='blue-league-title'>Who am I?</h1>
                        <p className='gray-league-paragraph'>
                        <span className='league-p-bold'>Computer science student</span> focused on building clean, functional, and user-friendly software. I enjoy solving technical problems, experimenting with new ideas, and creating projects that balance simplicity with good design.
                        <br></br><br></br>
                        Outside of coding, I spend time exploring game systems, interactive experiences, and the technology behind the products people use every day.
                        <br></br><br></br>
                        Check out my <a className='league-p-clickable' href="#Projects" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('openProjects')); }}><span className='league-p-bold'>Projects</span></a> to see what I've been working on.</p>

                        <br></br><br></br>
                    </div>
                    <div className='blue-bubble self-pictures'>
                        <div className='self-picture-item'>
                            <img src={real_self_img} alt='The Real Me'></img>
                            <p className='picture-subtitle'>The Real Me</p>
                        </div>
                        
                        <br></br>
                        
                        <div className='self-picture-item'>
                            <img src="https://media.discordapp.net/attachments/1321149477519753216/1506225478053269605/Ru_render_headshot_2026-05-19T09_13_21.355Z.png?ex=6a22954a&is=6a2143ca&hm=f2f0bb609919abf4a3f31cfecc1b09fb39ca0fd37c838443f34ce2391efdd25c&=&format=webp&quality=lossless&width=1494&height=1494" alt='Metaphorical Self'></img>
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
                            </ul>
                        </div>
                        <img src={wooper_img} alt="Wooper" className='wooper-decoration' />
                    </div>
                    <div className='blue-bubble half-container'>
                        <h1 className='blue-league-title'>What I've Been Working On</h1>
                        <a href="https://pokelidstrak.vercel.app/index.html">
                            <img src="https://pokelidstrak.vercel.app/assets/logo.png" alt="Pokelids'Trak" className='checkout-image' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
