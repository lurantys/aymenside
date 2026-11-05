import hana from '../img/projects/hana.jpg';
import poststash from '../img/projects/poststash.jpg';
import stockatfish from '../img/projects/stockatfish.jpg';

interface ProjectItemProps {
    title: string;
    description: string;
    subtext?: string;
    link: string;
    image?: string;
    imageAlt?: string;
    technology?: string;
    featured?: boolean;
    imageClass?: string;
}

function ProjectItem({ title, description, subtext, link, image, imageAlt, technology, featured, imageClass }: ProjectItemProps) {
    return (
        <article className={`project-item${featured ? ' featured-project' : ''}`}>
            {image && <a className={`project-image ${imageClass || ''}`} href={link} aria-label={`View ${title}`}>
                <img src={image} alt={imageAlt || ''} width="1200" height="750" loading="lazy" />
            </a>}
            <div className="project-copy">
                {technology && <p className="project-technology">{technology}</p>}
                <h3><a href={link}>{title}</a></h3>
                <p>{description}</p>
                {subtext && <p className="project-detail">{subtext}</p>}
                {featured && <a className="project-visit" href={link}>{title === 'Poststash' ? 'View repository' : 'Visit website'}</a>}
            </div>
        </article>
    );
}

export default ProjectItem;

export const FEATURED_PROJECTS = [
    <ProjectItem key="hana" title="Hana" featured image={hana}
        imageAlt="Hana's desktop manga reader with browsing and Continue Reading shelves"
        technology="Next.js · React · Manga reader"
        description="A manga reader that brings discovery, reading, and library tracking together."
        subtext="Aggregates MangaDex, Atsu, and MangaKatana, with AniList and MyAnimeList sync to keep reading progress connected."
        link="https://hanamanga.online" />,
    <ProjectItem key="poststash" title="Poststash" featured image={poststash} imageClass="extension-preview"
        imageAlt="Poststash's popup with content, format, date, and post-limit download filters"
        technology="JavaScript · Chrome extension"
        description="Save photos and videos from Instagram, TikTok, and X, plus audio from YouTube, directly from each site's interface."
        subtext="Instagram profile downloads include content, format, date, and post-limit filters."
        link="https://github.com/lurantys/poststash" />,
    <ProjectItem key="stockatfish" title="Stockatfish" featured image={stockatfish} imageClass="extension-preview"
        imageAlt="Stockatfish's popup with analysis controls, strength levels, and move preferences"
        technology="JavaScript · Stockfish · Chrome extension"
        description="Local chess analysis with move hints on Chess.com analysis and bot boards."
        subtext="Five strength levels and balanced, attacking, or positional preferences, built for study and bot practice."
        link="https://lurantys.github.io/Stockatfish/" />,
];

export const ALL_PROJECT_ITEMS: Map<string, JSX.Element[]> = new Map([
    ['Projects', [
        <ProjectItem key="stackgpt" title="StackGPT" description="Save and organize useful snippets from conversations across AI platforms." link="https://lurantys.github.io/stackgpt/" />,
        <ProjectItem key="pokedoro" title="PokeDoro" description="A Pokémon-inspired Pomodoro app with timed focus sessions, tasks, and streaks." subtext="The timer and task system are live; additional progression features are in development." link="https://pokedorosf.vercel.app/" />,
        <ProjectItem key="yoshi" title="Yoshi" description="Turn a mood, activity, or a few words into a personalized Spotify playlist." link="https://yoshi-red.vercel.app/" />,
        <ProjectItem key="quotethat" title="QuoteThat" description="A Python Discord bot that turns quotes into styled images using Discord.py and Pillow." link="https://github.com/lurantys/quotethat" />,
    ]],
    ['Experience', [
        <ProjectItem key="intern" title="Data Science Intern" description="Built AI models for accident prevention using machine learning and data analysis." link="https://www.hiroden.co.jp/" />,
        <ProjectItem key="hackclub" title="Hack Club Neighborhood" description="Created and showcased coding projects in a global student community, with rapid prototyping, problem-solving, and peer-to-peer learning." link="https://hackclub.com/" />,
    ]],
    ['Education', [
        <ProjectItem key="eikei" title="Eikei University of Hiroshima" description="Exchange program" link="https://eikei.ac.jp/english/" />,
        <ProjectItem key="aui" title="Al Akhawayn University" description="Bachelor's degree in Computer Science" link="https://www.aui.ma/" />,
    ]],
]);
