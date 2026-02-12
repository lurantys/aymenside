import './Home.css';
import real_self_img from './img/real_self.jpg';
import wooper_img from './img/wooper.png';
import Projects from './markside_components/Projects';
import YTEmbed from './markside_components/YTEmbed';

function Home() {
    return (
        <>  
            <div className='middle-column container-body-width'>
                <div className='middle-flex-row'>
                    <div className='blue-bubble who-am-i'>
                        <h1 className='blue-league-title'>Who am I?</h1>
                        <p className='gray-league-paragraph'>
                        By day, I'm a <span className='league-p-bold'><a className='league-p-clickable' href="https://www.linkedin.com/in/aymen-nhaila-9ab6b5319/">computer science student</a></span> who likes building stuff and figuring out how things work. I enjoy turning ideas into <span className='league-p-bold'>clean, usable software</span> and solving problems that feel genuinely satisfying to crack. I'm less about overengineering and more about <span className='league-p-bold'>making things that work well and feel good to use</span>.
                        <br></br><br></br>
                        By night, I'm just a <span className='league-p-bold'>big nerd having fun with it</span>. I work on random projects, mess around with code, and think way too much about games—whether that's grinding Pokémon, sweating in Valorant, or breaking down why certain systems keep players coming back. When I'm not coding, I'm probably gaming, learning something new for no real reason, or thinking about how to make ideas more fun and interactive.
                        <br></br><br></br>
                        Check out my <a className='league-p-clickable' href="#Projects"><span className='league-p-bold'>Projects</span></a> if you want to see what I've been building lately.</p>

                        <br></br><br></br>
                    </div>
                    <div className='blue-bubble self-pictures'>
                        <div className='self-picture-item'>
                            <img src={real_self_img} alt='The Real Me'></img>
                            <p className='picture-subtitle'>The Real Me</p>
                        </div>
                        
                        <br></br>
                        
                        <div className='self-picture-item'>
                            <img src="https://i.pinimg.com/736x/88/30/d5/8830d5708b04e57803cedcb6016f7659.jpg" alt='Metaphorical Self'></img>
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
                        <h1 className='blue-league-title'>Misc Links</h1>
                        <ul> { /* TODO: I could make this iterative? */ }
                            <li className='misc-links-list-item'>- <a href="https://www.linkedin.com/in/aymen-nhaila-9ab6b5319/" className='misc-links-title'>LinkedIn</a>, my professional profile</li>
                            <li className='misc-links-list-item'>- <a href="https://github.com/lurantys/" className='misc-links-title'>GitHub</a>, where you can find all my code</li>
                            <li className='misc-links-list-item'>- <a href="https://leetcode.com/u/lurantys/" className='misc-links-title'>LeetCode</a>, (i'm not that active)</li>
                            <li className='misc-links-list-item'>- <a href="mailto:a.nhaila@aui.ma" className='misc-links-title'>Email</a>, for professional purposes</li>
                            <hr></hr>
                            <li className='misc-links-list-item'>- <a href="https://www.instagram.com/hisiuan/" className='misc-links-title'>Instagram</a>, if you know me personally</li>
                            <li className='misc-links-list-item'>- <a href="https://discord.com/users/865523572730363955" className='misc-links-title'>Discord</a>, this is where i'm probably going to reply the fastest</li>
                        </ul>
                        <img src={wooper_img} alt="Wooper" className='wooper-decoration' />
                    </div>
                    <div className='blue-bubble yt-container'>
                        <YTEmbed />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;