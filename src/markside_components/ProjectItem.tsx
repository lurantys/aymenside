import hanaHome from "../img/hana-home.png";
import stockatfishAnalysis from "../img/stockatfish-analysis.png";
import poststashInstagram from "../img/poststash-instagram.png";

interface ProjectItemProps {
    title: string
    description: string[]
    subtext: string | undefined
    link: string
    period?: string
    location?: string
    expandable?: boolean
    details?: string[]
    technologies?: string[]
    screenshots?: { src: string; alt: string; caption: string }[]
}

function ProjectItem(props: ProjectItemProps): JSX.Element {
    const descriptionText: string = props.description.map((el) => el.trim()).join(' ');

    const metaParts: string[] = [];
    if (props.location !== undefined) {
        metaParts.push(props.location);
    }
    if (props.period !== undefined) {
        metaParts.push(props.period);
    }

    const overview = (
        <>
            <span className='project-title'>{props.title}</span>
            {metaParts.length > 0 ? <span className='project-meta'>{metaParts.join(' · ')}</span> : null}
            <span className='project-desc'>{descriptionText}</span>
        </>
    );

    return (
        <div className='project-section'>
            {props.expandable ? <details className='project-details'>
                <summary className='project-details-toggle'>
                    <span className='project-overview'>{overview}</span>
                    <svg className='project-details-icon' viewBox='0 0 20 20' width='20' height='20' fill='none' aria-hidden='true'>
                        <path d='m5 7 5 5 5-5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                </summary>
                <div className='project-details-content'>
                    {props.screenshots?.map((screenshot) => (
                        <figure className='project-screenshot' key={screenshot.src}>
                            <img src={screenshot.src} alt={screenshot.alt} loading='lazy' />
                            <figcaption>{screenshot.caption}</figcaption>
                        </figure>
                    ))}
                    {props.details?.map((paragraph) => <p className='project-detail-paragraph' key={paragraph}>{paragraph}</p>)}
                    {props.technologies && props.technologies.length > 0 ? (
                        <p className='project-tech-list'>Built with {props.technologies.join(' · ')}</p>
                    ) : null}
                    {props.subtext !== undefined ? <p className='project-subtext'>{props.subtext}</p> : null}
                    <a className='project-detail-link' href={props.link} target='_blank' rel='noreferrer'>Visit {props.title} ↗</a>
                </div>
            </details> : <>
                <div className='project-title'><a className='project-title-link' href={props.link}>{props.title}</a></div>
                {metaParts.length > 0 ? <div className='project-meta'>{metaParts.join(' · ')}</div> : null}
                <div className='project-desc'>{descriptionText}</div>
                {props.subtext !== undefined ? <div className='project-subtext'>{props.subtext}</div> : null}
            </>}
            <hr className='project-divide'></hr>
        </div>
    )
}

export default ProjectItem;

export const ALL_PROJECT_ITEMS: Map<string, JSX.Element[]> = new Map<string, JSX.Element[]>([
    ["Experience", [
        <ProjectItem
            key="hiroden"
            title="Data Science Intern"
            description={["Built", "AI models", "for", "accident prevention", "using machine learning and data analysis to improve safety systems"]}
            subtext={undefined}
            link="https://www.hiroden.co.jp/"
            period="Jan – Mar 2026"
            location="Hiroshima, Japan"
        />,
        <ProjectItem
            key="neighborhood"
            title="Hack Club Neighborhood"
            description={["Spent a month living in a", "San Francisco hacker house", "with a global cohort of student builders, shipping and showcasing", "coding projects", "through rapid prototyping and", "peer-to-peer learning"]}
            subtext={undefined}
            link="https://hackclub.com/"
            period="Aug 2026"
            location="San Francisco, CA"
        />
    ]],
    ["Projects & Achievements", [
        <ProjectItem
            key="hana"
            title="Hana"
            expandable={true}
            description={["A manga reader for manga, manhwa, manhua, and webtoons, with local reading progress and optional AniList and MyAnimeList list syncing."]}
            subtext="Also available as a cross-platform desktop app built with Tauri."
            link="https://hanamanga.online"
            details={[
                "Built independently from the application through its supporting infrastructure.",
                "Aggregates manga from MangaDex, Atsu, and MangaKatana, with in-app reading and automatic source fallback.",
                "A key engineering challenge was serving image-heavy chapters to many users within free hosting limits. I addressed this with aggressive caching and Cloudflare image proxying."
            ]}
            technologies={["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloudflare"]}
            screenshots={[{
                src: hanaHome,
                alt: "Hana manga reader home screen featuring Dandadan and a continue-reading carousel",
                caption: "Hana home screen with featured manga and reading progress."
            }]}
        />,
        <ProjectItem
            key="poststash"
            title="Poststash"
            expandable={true}
            description={["A Chrome extension for saving photos and videos from Instagram, TikTok, and X, plus audio from YouTube."]}
            subtext="Download buttons appear directly on each site."
            link="https://github.com/lurantys/poststash"
            details={[
                "Save media without leaving the page: Instagram posts, carousels, Reels, Stories, and Highlights; TikTok videos and photo slideshows; photos and videos from X posts; and audio from YouTube videos and Shorts.",
                "Instagram profile downloads include filters for content type, format, date range, and post count. Saved files are organized into folders by platform, with Instagram and TikTok downloads also grouped by creator.",
                "Built as a Manifest V3 extension using the existing browser session. Platform-specific content scripts place download controls inside each site's interface, while a background service worker coordinates downloads and reports their progress."
            ]}
            technologies={["JavaScript", "HTML", "CSS", "Chrome Extensions / Manifest V3"]}
            screenshots={[{
                src: poststashInstagram,
                alt: "Instagram carousel post with Poststash's download button integrated into the action row",
                caption: "Poststash adds a download button alongside Instagram's existing post actions."
            }]}
        />,
        <ProjectItem
            key="stockatfish"
            title="Stockatfish"
            expandable={true}
            description={["A Chrome extension that overlays Stockfish move hints across Chess.com, including multiplayer games, bots, and analysis boards."]}
            subtext="Runs locally, with five strength levels and a choice of playing styles."
            link="https://lurantys.github.io/Stockatfish/"
            details={[
                "The main technical challenge was extracting the board position from Chess.com's live interface and keeping the move-hint overlay aligned with the board as the position changed."
            ]}
            technologies={["Stockfish", "Chrome Extensions"]}
            screenshots={[{
                src: stockatfishAnalysis,
                alt: "Chess.com analysis board with a yellow move-hint arrow from b8 to c6",
                caption: "Stockatfish move-hint overlay on a Chess.com analysis board."
            }]}
        />,
        <ProjectItem
            key="stackgpt"
            title="StackGPT"
            expandable={true}
            description={["Save and organize snippets from AI conversations across platforms."]}
            subtext={undefined}
            link="https://lurantys.github.io/stackgpt/"
        />,
        <ProjectItem
            key="pokedoro"
            title="PokeDoro"
            expandable={true}
            description={["A Pokémon-themed Pomodoro timer with tasks and focus streaks."]}
            subtext="Timer and tasks are live; badges and Pokédex progression are in development."
            link="https://pokedorosf.vercel.app/"
        />,
        <ProjectItem
            key="yoshi"
            title="Yoshi"
            expandable={true}
            description={["Creates Spotify playlists from a mood description or a quick preset."]}
            subtext={undefined}
            link="https://yoshi-red.vercel.app/"
        />,
        <ProjectItem
            key="quotethat"
            title="QuoteThat"
            expandable={true}
            description={["A Discord bot for creating and sharing styled quote images in your server."]}
            subtext="Built with Python, Discord.py, and Pillow."
            link="https://github.com/lurantys/quotethat"
        />
    ]],
    ["Education", [
        <ProjectItem
            key="eikei"
            title="Eikei University of Hiroshima"
            description={["Exchange", "Program"]}
            subtext={undefined}
            link="https://eikei.ac.jp/english/"
            period="Jan – Jun 2026"
            location="Hiroshima, Japan"
        />,
        <ProjectItem
            key="aui"
            title="Al Akhawayn University"
            description={["Bachelor's degree in", "Computer Science"]}
            subtext={undefined}
            link="https://www.aui.ma/"
            period="2024 – 2028 (expected)"
            location="Ifrane, Morocco"
        />
    ]],
    ["Games", []]
]);
