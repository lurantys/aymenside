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
            description={["A manga reader with multiple sources and reading progress synced to AniList and MyAnimeList."]}
            subtext="Also available as a cross-platform desktop app built with Tauri."
            link="https://hanamanga.online"
        />,
        <ProjectItem
            key="poststash"
            title="Poststash"
            description={["A Chrome extension for saving photos and videos from Instagram, TikTok, and X, plus audio from YouTube."]}
            subtext="Download buttons appear directly on each site."
            link="https://github.com/lurantys/poststash"
        />,
        <ProjectItem
            key="stockatfish"
            title="Stockatfish"
            description={["A Chrome extension that adds Stockfish move hints to Chess.com analysis and bot boards."]}
            subtext="Runs locally, with five strength levels and a choice of playing styles."
            link="https://lurantys.github.io/Stockatfish/"
        />,
        <ProjectItem
            key="stackgpt"
            title="StackGPT"
            description={["Save and organize snippets from AI conversations across platforms."]}
            subtext={undefined}
            link="https://lurantys.github.io/stackgpt/"
        />,
        <ProjectItem
            key="pokedoro"
            title="PokeDoro"
            description={["A Pokémon-themed Pomodoro timer with tasks and focus streaks."]}
            subtext="Timer and tasks are live; badges and Pokédex progression are in development."
            link="https://pokedorosf.vercel.app/"
        />,
        <ProjectItem
            key="yoshi"
            title="Yoshi"
            description={["Creates Spotify playlists from a mood description or a quick preset."]}
            subtext={undefined}
            link="https://yoshi-red.vercel.app/"
        />,
        <ProjectItem
            key="quotethat"
            title="QuoteThat"
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
