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
                            <img src="https://scontent-nrt6-1.cdninstagram.com/v/t51.82787-19/670855449_18010175789903695_8400091343140556545_n.jpg?_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=1JWNqCU1m6oQ7kNvwEEAOe-&_nc_oc=AdodJpRcvaymHGlOSXTfdlWr14qrX7o4LApTxopeUlOk6Pf8cvdmrlHH0W_TwIpf5mZBJX3TTr-kYAJpBxYgwaW1&_nc_zt=24&_nc_ht=scontent-nrt6-1.cdninstagram.com&_nc_gid=f5eLKc8Jff78WMvhkmIwUQ&_nc_ss=7b6a8&oh=00_Af7ji2Feixiw_2XBTew164DveQ8Xqh8hIRn3iymghKrfMQ&oe=6A0CB220" alt='Metaphorical Self'></img>
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
                        <ul>
                            <li className='misc-links-list-item'>- <a href="https://www.linkedin.com/in/aymen-nhaila-9ab6b5319/" className='misc-links-title'>LinkedIn</a>, my professional profile</li>
                            <li className='misc-links-list-item'>- <a href="https://github.com/lurantys/" className='misc-links-title'>GitHub</a>, where you can find all my code</li>
                            <li className='misc-links-list-item'>- <a href="https://leetcode.com/u/lurantys/" className='misc-links-title'>LeetCode</a>, (i'm not that active)</li>
                            <li className='misc-links-list-item'>- <a href="mailto:a.nhaila@aui.ma" className='misc-links-title'>Email</a>, for professional purposes</li>
                            <hr></hr>
                            <li className='misc-links-list-item'>- <a href="https://www.instagram.com/bynhaila/" className='misc-links-title'>Instagram</a>, if you know me personally</li>
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
