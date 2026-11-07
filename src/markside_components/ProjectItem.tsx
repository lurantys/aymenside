interface ProjectItemProps {
    title: string
    description: string[]
    subtext: string | undefined
    link: string
    period?: string
    location?: string
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

    return (
        <div className='project-section'>
            <div className='project-title'><a className='project-title-link' href={props.link}>{props.title}</a></div>
            {metaParts.length > 0 ? <div className='project-meta'>{metaParts.join(' · ')}</div> : null}
            <div className='project-desc'>{descriptionText}</div>
            {props.subtext !== undefined ? <div className='project-subtext'>{props.subtext}</div> : null}
            <hr className='project-divide'></hr>
        </div>
        
    )
}

export default ProjectItem;

export const ALL_PROJECT_ITEMS: Map<string, JSX.Element[]> = new Map<string, JSX.Element[]>([
    ["Experience", [
        <ProjectItem
            title="Data Science Intern"
            description={["Built", "AI models", "for", "accident prevention", "using machine learning and data analysis to improve safety systems"]}
            subtext={undefined}
            link="https://www.hiroden.co.jp/"
            period="Jan – Mar 2026"
            location="Hiroshima, Japan"
        />,
        <ProjectItem
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
            title="Hana"
            description={["Manga reader serving 200+ users", "Multi-source aggregation: MangaDex, Atsu, MangaKatana", "AniList and MyAnimeList sync for progress and library tracking", "Tauri cross-platform desktop client"]}
            subtext={undefined}
            link="https://hanamanga.online"
        />,
        <ProjectItem
            title="Poststash"
            description={["A", "Chrome extension", "that saves photos and videos from Instagram, TikTok, and X, plus", "audio from YouTube", "through download buttons built into each site's interface."]}
            subtext="Supports Instagram profile downloads with content, format, date, and post-limit filters."
            link="https://github.com/lurantys/poststash"
        />,
        <ProjectItem
            title="Stockatfish"
            description={["A", "Chrome chess analysis extension", "that runs", "Stockfish locally", "and overlays move hints on Chess.com analysis and bot boards."]}
            subtext="Built for study and bot practice, with five strength levels and balanced, attacking, or positional move preferences."
            link="https://lurantys.github.io/Stockatfish/"
        />,
        <ProjectItem
            title="StackGPT"
            description={["Never lose a good chat again.", "Save snippets across every AI platform."]}
            subtext="Built to organize your AI conversations."
            link="https://lurantys.github.io/stackgpt/"
        />,
        <ProjectItem
            title="PokeDoro"
            description={["A", "Pokémon-inspired Pomodoro web app", "that gamifies focus and productivity, pairing", "timed work sessions", "with tasks, streaks, and", "progression mechanics"]}
            subtext="The core timer and task system are live, with badges, Pokédex progression, and additional gamified features in development."
            link="https://pokedorosf.vercel.app/"
        />,
        <ProjectItem
            title="Yoshi"
            description={["A", "mood-driven web app", "that generates", "personalized Spotify playlists", "based on how you're feeling, what you're doing, or the vibe you want"]}
            subtext="Users can describe their mood in natural language or choose quick presets, with the app handling playlist creation through Spotify integration."
            link="https://yoshi-red.vercel.app/"
        />,
        <ProjectItem
            title="QuoteThat"
            description={["A", "Python-based Discord bot", "that generates", "styled quote images", "using Discord.py and Pillow, allowing users to create and share inspirational quote graphics directly within their server"]}
            subtext="The core quote image generation and Discord integration are implemented, with plans to expand customization options and quote sources."
            link="https://github.com/lurantys/quotethat"
        />
    ]], 
    ["Education", [
        <ProjectItem
            title="Eikei University of Hiroshima"
            description={["Exchange", "Program"]}
            subtext={undefined}
            link="https://eikei.ac.jp/english/"
            period="Jan – Jun 2026"
            location="Hiroshima, Japan"
        />,
        <ProjectItem
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
